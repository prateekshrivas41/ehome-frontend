const setLocalData = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting item in localStorage', error);
    }
};

const getLocalData = (key) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error getting item from localStorage', error);
        return null;
    }
};

const removeLocalData = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing item from localStorage', error);
    }
};

const clearLocalStorage = () => {
    try {
        localStorage.clear();
    } catch (error) {
        console.error('Error clearing localStorage', error);
    }
};

function normalizeUserAgent(userAgent) {
    // Remove anything inside square brackets
    let normalizedUserAgent = userAgent?.replace(/\[.*?\]/g, '');

    // Optionally, remove 'Mobile/[some_version]'
    normalizedUserAgent = normalizedUserAgent?.replace(/Mobile\/[^\s]+/, '');
   
    // Return the normalized user agent string
    return normalizedUserAgent.trim();
}

export { setLocalData, getLocalData, clearLocalStorage, removeLocalData, normalizeUserAgent}