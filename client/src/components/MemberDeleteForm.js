import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './MemberDeleteForm.css';

function MemberDeleteForm(){
    
    return (
        <div>
            <Form>
                <div className="box">
                    <h1 className="context">회원 탈퇴</h1>
                </div>
                <Button>회원탈퇴</Button>&nbsp;
                <Button>메인으로</Button>
            </Form>
        </div>
    );
}

export default MemberDeleteForm