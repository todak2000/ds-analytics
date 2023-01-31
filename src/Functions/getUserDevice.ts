export const getUserDevice = (): string => {
    const device = navigator.userAgent;
    const isMobileDevice = /android|iphone|kindle|ipad/i.test(device);

    return isMobileDevice ? 'mobile' : 'desktop';
};