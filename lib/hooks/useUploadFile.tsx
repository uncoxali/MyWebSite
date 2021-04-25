import { ChangeEvent, useState } from 'react';
import gate from 'gate';

type dataType = {
    url: string;
    filename: string;
};
type uploadProgressType = {
    loaded?: number;
    total?: number;
    percentage?: number;
};
function useUploadFile() {
    const [loading, setLoading] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<uploadProgressType>({
        loaded: 0,
        percentage: 0,
        total: 0,
    });

    const [data, setData] = useState<dataType>({
        url: '',
        filename: '',
    });
    const [error, setError] = useState<any>(null);
    const onUploadProgress = ({ total, loaded }: any) => {
        const percentage = Math.floor((loaded / total) * 100);
        setUploadProgress({
            percentage,
            total,
            loaded,
        });
    };

    async function uploadImage(data: FormData) {
        try {
            const result = await gate.uploadFile(data, onUploadProgress);
            setData(result);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    async function createFormData(file: File) {
        const formData: FormData = new FormData();
        formData.append('file', file);
        return formData;
    }

    async function uploadFile(e: ChangeEvent<HTMLInputElement>) {
        setLoading(true);
        const file = e.target.files;
        const formData = await createFormData((file as FileList)[0]);
        await uploadImage(formData);
    }

    return { loading, data, error, uploadFile, uploadProgress };
}

export default useUploadFile;
