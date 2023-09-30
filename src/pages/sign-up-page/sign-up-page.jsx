import {useState} from "react";

import './sign-up.scss';
import {postData, closeModal, createModalContent, setModalAndLoading} from '../../services/services';
import Spinner from "../../components/spinner/Spinner";
import Modal from "../../components/modal/modal";


const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [modalError, setModalError] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        const data = {
            username: username,
            password,
            role: ["user"]
        }

        const clearForm = () => {
            setUsername('');
            setPassword('');
        }


        postData(`${process.env.REACT_APP_API_ROOT_URL}/api/auth/signup`, JSON.stringify(data))
            .then(res => {
                const {status} = res;
                if (status === 200) {
                    const messages = [];
                    messages.push("Success! Now you can log in and use the service.");
                    setModalContent(createModalContent("New account was created", messages));

                    clearForm();
                    document.getElementById("create-subscriber-form").reset();
                    setModalAndLoading(true, false, false, setIsModal, setModalError, setLoading);
                } else if (status === 400 || status === 404) {
                    const messages = [];
                    for (const key in res) {
                        if (key !== 'status') {
                            messages.push(res[key]);
                        }
                    }
                    setModalContent(createModalContent("Error", messages));

                    setModalAndLoading(true, true, false, setIsModal, setModalError, setLoading);
                } else if (status === 500) {
                    const messages = [];
                    messages.push("Server error. Please try again later.");
                    setModalContent(createModalContent("Error", messages));

                    setModalAndLoading(true, true, false, setIsModal, setModalError, setLoading);
                }
            })
            .catch(e => console.log(e));

    }

    const modal = isModal ? <Modal
        modalContent={modalContent}
        modalError={modalError}
        close={() => closeModal(setIsModal)}/> : null

    const lastElement = loading ?
        <div className="spinner-wrapper">
            <Spinner/>
        </div> :
        <button type="submit">
            Create account</button>

    return (
        <>
            <div className="sign-up-wrapper">
                <form id="create-subscriber-form" method="post" onSubmit={handleSubmit}>
                    {/*<FormInput*/}
                    {/*    handleChange={(e) => handleChange(e, setUsername)}*/}
                    {/*    clearError={() => clearErrorAfterFocus(errorUser , setErrorUser)}*/}
                    {/*    error={errorUser}*/}
                    {/*    name="username"*/}
                    {/*    type="text"*/}
                    {/*    label="Username"*/}
                    {/*    value={username}*/}
                    {/*    required*/}
                    {/*/>*/}
                    {/*<FormInput*/}
                    {/*    handleChange={(e) => handleChange(e, setPassword)}*/}
                    {/*    clearError={() => clearErrorAfterFocus(errorPassword ,setErrorPassword)}*/}
                    {/*    error={errorPassword}*/}
                    {/*    name="password"*/}
                    {/*    type={passwordShown ? "text" : "password"}*/}
                    {/*    label="Password"*/}
                    {/*    value={password}*/}
                    {/*    i={<i onClick={togglePasswordVisiblity}>{passwordShown ? eyeSlash : eye}</i>}*/}
                    {/*    required*/}
                    {/*/>*/}
                    {lastElement}
                </form>
                {modal}
            </div>
        </>
    )
}

export default SignUpPage;