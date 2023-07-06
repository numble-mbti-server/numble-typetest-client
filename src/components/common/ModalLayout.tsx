import React, { SetStateAction } from 'react';

import LoginModalContent from '../Modal/LoginModalContent';
import UserInfoModalContent from '../Modal/UserInfoModalContent';

interface ModalProps {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  isLogin: boolean;
}

const ModalLayout = ({ setIsModalOpen, isLogin }: ModalProps) => {
  return (
    <div id="login_popup" className="layer_popup">
      <div className="layer_wrap">{isLogin ? <UserInfoModalContent setIsModalOpen={setIsModalOpen} /> : <LoginModalContent />}</div>
      <div className="layer_blur" onClick={() => setIsModalOpen(false)}></div>
    </div>
  );
};

export default ModalLayout;
