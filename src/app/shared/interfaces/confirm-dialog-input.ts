import { FormDialogInput } from './form-dialog-input';

export interface ConfirmDialogInput extends FormDialogInput {
  id: string;
  message: string;
}
