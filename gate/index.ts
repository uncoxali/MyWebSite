import api from './api';

const uploadFile = {
    uploadFile: (data: FormData, onUploadProgress: ((progressEvent: any) => void) | undefined) =>
        api.file('/file-upload', data, onUploadProgress),
};

const home = {
    home: () => api.get('/home'),
};

export default {
    ...uploadFile,
    ...home,
};
