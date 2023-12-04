import CloseIcon from '@mui/icons-material/Close';
import './SendMail.css';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { db } from './firebase';

function SendMail() {
  const { register , handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className='sendMail'>
      <div className="sendMail__header">
        <h3>NewMessage</h3>
        <CloseIcon className='sendMail__close' onClick={() => dispatch(closeSendMessage())} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} >
        <input name='to' placeholder='To' type="email" {...register('to', { required: true })} />
        {errors.to && <p className='sendMail__error'>To is required</p>}
        <input name='subject' placeholder='Subject' type="text" {...register('subject', { required: true })} />
        {errors.subject && <p className='sendMail__error'>Subject is required</p>}
        <input name='message' placeholder='Message...' type="text" className='sendMail__message' {...register('message', { required: true })} />
        {errors.message && <p className='sendMail__error'>Message is required</p>}

        <div className="sendMail__options">
          <Button
          className='sendMail__send'
          variant='contained'
          color='primary'
          type='submit'
          >Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail;