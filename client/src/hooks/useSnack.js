import { useSnackbar } from 'notistack';

export default function useSnack() {
    const { enqueueSnackbar } = useSnackbar();

    return (msg, variant) => enqueueSnackbar(msg, { variant });
}
