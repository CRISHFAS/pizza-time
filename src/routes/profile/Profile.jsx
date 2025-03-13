import React, { useEffect, useState } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { useNavigate } from "react-router-dom";
import validateForm from "../../components/validateForm";
import './profile.css'

const Profile = ({ currentUser, handleLogout, updateUser }) => {
    const [editForm, setEditForm] = useState(false);
    const [formValue, setFormValue] = useState({ email: '', password: '', fullname: '', address: '', number: '' });
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(false);
    const navigate = useNavigate()
    const validate = validateForm("profile");
    const toggleForm = () => {
        setEditForm(!editForm);
    }

    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        setFormErrors(validate(formValue));
        window.scrollTo(0, 0);
        if (Object.keys(validate(formValue)).length > 0) {
            setLoading(false);
            return;
        }
        else {
            const updatedFields = {};
            for (const fieldName of Object.keys(formValue)) {
                if (formValue[fieldName] !== '' && formValue[fieldName] !== currentUser[fieldName]) {
                    updatedFields[fieldName] = formValue[fieldName];
                } else {
                    updatedFields[fieldName] = currentUser[fieldName];
                }
            }

            const update = await updateUser(currentUser.id, updatedFields);
            if (update) {
                setLoading(false);
                setEditForm(false);
                setFormValue({ email: '', password: '', fullname: '', address: '', number: '' })
            }
        }
    }

    const confirmDeleteUser = () => {
        ResetLocation()
        setConfirmationModal(true);
    }

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_USERS_URL}/${id}`, {
                method: 'DELETE'
            });
            if (response.status === 200) {
                navigate("/");
                handleLogout();
                return true;
            }
        }
        catch (err) {
            console.log(err.message);
            return false;
        }
    }

    useEffect(() => {
        document.title = "Profile | Pizza Time";
    }, []);
    return (
        <main className="profile">
            <h2>Información de perfil</h2>
            <p>Datos personales y solicitud</p>
            {loading ?
                <div role="status" className="loader">
                    <p>Casi llegamos...</p>
                    <img alt="Processing request" src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
                </div> :
                editForm ?
                    <form className="profile__form" onSubmit={handleSubmit}>
                        <hr aria-hidden="true" />
                        <section className="profile__form__info">
                            <label htmlFor="email">Email</label>
                            <input name="email" type="text" value={formValue.email} placeholder={currentUser.email} onChange={handleValidation} />
                        </section>
                        <span className="input-validation-error">{formErrors.email}</span>
                        <hr aria-hidden="true" />
                        <section className="profile__form__info">
                            <label htmlFor="password">Contraseña</label>
                            <input name="password" type="password" value={formValue.password} placeholder="********" onChange={handleValidation} />
                        </section>
                        <span className="input-validation-error">{formErrors.password}</span>
                        <hr aria-hidden="true" />
                        <section className="profile__form__info">
                            <label htmlFor="fullname">Nombre completo</label>
                            <input name="fullname" type="text" value={formValue.fullname} placeholder={currentUser.fullname} onChange={handleValidation} />
                        </section>
                        <span className="input-validation-error">{formErrors.fullname}</span>
                        <hr aria-hidden="true" />
                        <section className="profile__form__info">
                            <label htmlFor="address">Dirección</label>
                            <input name="address" type="text" value={formValue.address} placeholder={currentUser.address !== null ? currentUser.address : 'Add address...'} onChange={handleValidation} />
                        </section>
                        <span className="input-validation-error">{formErrors.address}</span>
                        <hr aria-hidden="true" />
                        <section className="profile__form__info">
                            <label htmlFor="number">Número</label>
                            <input name="number" type="text" value={formValue.number} placeholder={currentUser.number !== null ? currentUser.number : 'Add number...'} onChange={handleValidation} />
                        </section>
                        <span className="input-validation-error">{formErrors.number}</span>
                        <hr aria-hidden="true" />
                        <section className="profile__actions">
                            <button type="button" className="active-button-style" onClick={() => { toggleForm(); ResetLocation() }}>Cancelar edición</button>
                            <button className="passive-button-style">Guardar perfil</button>
                        </section>
                    </form> :
                    <React.Fragment>
                        <article className="profile__info">
                            <hr aria-hidden="true" />
                            <section className="profile__info__section">
                                <h3>Email</h3>
                                <p>{currentUser.email}</p>
                            </section>
                            <hr aria-hidden="true" />
                            <section className="profile__info__section">
                                <h3>Contraseña</h3>
                                <p>*********</p>
                            </section>
                            <hr aria-hidden="true" />
                            <section className="profile__info__section">
                                <h3>Nombre completo</h3>
                                <p>{currentUser.fullname}</p>
                            </section>
                            <hr aria-hidden="true" />
                            <section className="profile__info__section">
                                <h3>Dirección</h3>
                                {currentUser.address !== null ?
                                    <p>{currentUser.address}</p> :
                                    <p>N/A</p>}
                            </section>
                            <hr aria-hidden="true" />
                            <section className="profile__info__section">
                                <h3>Número</h3>
                                {currentUser.number !== null ?
                                    <p>{currentUser.number}</p> :
                                    <p>N/A</p>}
                            </section>
                            <hr aria-hidden="true" />
                        </article>
                        <section className="profile__actions">
                            <button type="button" className="active-button-style" onClick={() => { toggleForm(); ResetLocation() }}>Editar perfil</button>
                            <button type="button" className="passive-button-style" onClick={() => confirmDeleteUser()}>Eliminar cuenta</button>
                        </section>
                    </React.Fragment>
            }
            {confirmationModal &&
                <section className="profile__delete-modal">
                    <section className="profile__delete-window">
                        <h3>Eliminar cuenta</h3>
                        <p>Está seguro de que desea eliminar su cuenta? Esta acción no se puede revertir y se perderán todos los datos</p>
                        <section>
                            <button type="button" className="profile__delete-confirm" onClick={() => deleteUser(currentUser.id)}>Confirmar</button>
                            <button type="button" className="profile__delete-cancel" onClick={() => { setConfirmationModal(false); ResetLocation() }}>Cancelar</button>
                        </section>
                    </section>
                </section>
            }
        </main>
    )
}



export default Profile;