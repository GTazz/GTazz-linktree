import { useState, useCallback, useRef, useEffect } from 'react';
import './NotificationToast.css';

/**
 * Self-contained Notification Toast Component
 * Manages its own state and provides copy-to-clipboard functionality
 */
const NotificationToast = () => {
    const [notification, setNotification] = useState({
        show: false,
        message: '',
        key: 0,
        useAutoHide: true,
        isSliding: false
    });
    const timeoutRef = useRef(null);
    const slideTimeoutRef = useRef(null);
    const isProcessingRef = useRef(false);
    const lastNotificationTimeRef = useRef(0);

    /**
     * Shows a notification message for a specified duration
     * @param {string} message - The message to display
     * @param {number} duration - Duration in milliseconds (default: 3000)
     */
    const showNotification = useCallback((message, duration = 3000) => {
        const now = Date.now();
        const timeSinceLastNotification = now - lastNotificationTimeRef.current;

        // If less than 1 second since last notification, disable auto-hide to prevent conflicts
        const useAutoHide = timeSinceLastNotification > 1000;

        // Clear any existing timeouts to prevent conflicts
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (slideTimeoutRef.current) {
            clearTimeout(slideTimeoutRef.current);
        }

        // Use a key to force re-render and restart animations
        setNotification(prev => ({
            show: true,
            message,
            key: prev.key + 1,
            useAutoHide,
            isSliding: false
        }));

        lastNotificationTimeRef.current = now;

        // Only set timeout if not using auto-hide (when spamming)
        if (!useAutoHide) {
            timeoutRef.current = setTimeout(() => {
                // Start slide-out animation
                setNotification(prev => ({
                    ...prev,
                    isSliding: true
                }));

                // Hide after animation completes
                slideTimeoutRef.current = setTimeout(() => {
                    setNotification(prev => ({
                        show: false,
                        message: '',
                        key: prev.key,
                        useAutoHide: true,
                        isSliding: false
                    }));
                    timeoutRef.current = null;
                    slideTimeoutRef.current = null;
                }, 300); // 300ms for fadeOut animation
            }, duration - 300); // Start slide-out 300ms before total duration
        }
    }, []);

    /**
     * Copies text to clipboard and shows a notification
     * @param {string} text - Text to copy to clipboard
     * @param {string} elementType - Type of element ('email' or 'phone')
     * @param {Object} langTexts - Language texts object containing success messages
     */
    const copyToClipboard = useCallback(async (text, elementType, langTexts) => {
        // Prevent rapid successive calls (debouncing)
        if (isProcessingRef.current) {
            return;
        }

        isProcessingRef.current = true;

        try {
            await navigator.clipboard.writeText(text);
            const message = elementType === 'email' ? langTexts.emailCopied : langTexts.phoneCopied;
            showNotification(message);
        } catch (err) {
            console.error('Error copying text:', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            let copied = false;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                // Clipboard API is available, use it
                try {
                    await navigator.clipboard.writeText(text);
                    copied = true;
                } catch {
                    // Clipboard API failed, fallback below
                }
            }
            if (!copied) {
                // Fallback for older browsers, limited support
                if (document.execCommand) {
                    document.execCommand('copy');
                    console.warn('document.execCommand("copy") is deprecated and may not work in all browsers.');
                } else {
                    console.warn('Copy to clipboard is not supported in this browser.');
                }
            }
            document.body.removeChild(textArea);
            const message = elementType === 'email' ? langTexts.emailCopied : langTexts.phoneCopied;
            showNotification(message);
        } finally {
            // Reset the processing flag after a short delay to allow for the next click
            setTimeout(() => {
                isProcessingRef.current = false;
            }, 300); // 300ms debounce delay
        }
    }, [showNotification]);

    // Expose the copyToClipboard function globally so it can be used by other components
    window.copyToClipboard = copyToClipboard;

    // Cleanup effect to clear timeouts on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (slideTimeoutRef.current) {
                clearTimeout(slideTimeoutRef.current);
            }
        };
    }, []);

    // Handle CSS animation end for auto-hide notifications
    const handleAnimationEnd = useCallback((event) => {
        if (event.animationName === 'fadeOut' && notification.useAutoHide) {
            setNotification(prev => ({
                show: false,
                message: '',
                key: prev.key,
                useAutoHide: true
            }));
        }
    }, [notification.useAutoHide]);

    const getClassName = () => {
        let className = 'toast-notification';
        if (!notification.useAutoHide) {
            className += ' no-auto-hide';
        }
        if (notification.isSliding) {
            className += ' manual-slide-out';
        }
        return className;
    };

    if (!notification.show) return null;

    return (
        <div
            className={getClassName()}
            key={notification.key}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className="toast-content">
                <svg
                    className="toast-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
                {notification.message}
            </div>
        </div>
    );
};

export default NotificationToast;
