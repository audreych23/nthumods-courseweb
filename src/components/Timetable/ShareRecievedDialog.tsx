import { useSettings } from '@/hooks/contexts/settings';
import { Button, DialogActions, DialogContent, DialogTitle, ModalClose, ModalDialog } from '@mui/joy';
import { useRouter } from 'next/navigation';

const ShareRecievedDialog = ({ onClose, courseCodes, semester }: { onClose: () => void, courseCodes: string[], semester: string }) => {
    const { language, setCourses } = useSettings();
    const router = useRouter();
    return (
        <ModalDialog>
            <ModalClose />
            <DialogTitle>You opened a share link!</DialogTitle>
            <DialogContent>
                What would you like to do with the imported courses?
                <span className="text-sm text-gray-400">*Importing courses will replace all your current courses!</span>
            </DialogContent>
            <DialogActions>
                <Button variant="plain" onClick={onClose} color="warning" >Cancel</Button>
                <Button variant="outlined" onClick={() => {
                    setCourses(courseCodes!);
                    onClose();
                }} color="danger">Import</Button>
                <Button variant="outlined" onClick={() => {
                    router.push('/'+language+'/timetable/view?'+semester+'='+courseCodes.join(','));
                    onClose();
                }}>View</Button>
            </DialogActions>
        </ModalDialog>
    )
}

export default ShareRecievedDialog;