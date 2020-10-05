import React, { useState } from 'react';
import Modal from 'react-modal';

interface Props {
  response: any;
}

const RenderModal = (props: Props) => {
  const { response } = props;
  const [status, setStatus] = useState({ show: false });

  // useEffect(() => {
  //   setStatus({
  //     ...status,
  //     data: Object.keys(response),
  //     value: Object.values(response),
  //   });
  // }, [status.data, status.value]);
  // console.log(status);
  const displayKeys = Object.keys(response);
  let i = displayKeys.indexOf('Ratings');
  displayKeys.splice(i, 1);

  return (
    <div>
      <button
        id='open-button'
        type='button'
        className='btn btn-primary btn-sm'
        onClick={() => setStatus({ ...status, show: true })}
      >
        Click here for more
      </button>
      <Modal
        isOpen={status.show}
        ariaHideApp={false}
        onRequestClose={() => setStatus({ ...status, show: false })}
      >
        {displayKeys.map((value, index) => (
          <p key={value}>
            <b>{value}</b> : {response[value]}
          </p>
        ))}
        <div className='d-flex justify-content-center'>
          <button
            type='button'
            className='btn btn-dark'
            onClick={() => setStatus({ ...status, show: false })}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default RenderModal;
