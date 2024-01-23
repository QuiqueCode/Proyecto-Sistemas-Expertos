import { useEffect, useRef } from 'react';
import './modal.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Imglogo from '../../assets/images/logoc.jpg'
import { Link } from 'react-router-dom';

export function  Modal(props){






    console.log("Soy props dentro de modal",props)
    const modalRef = useRef();

    useEffect(() => {
        const clickOutsideContent = (e) => {
            if (e.target === modalRef.current) {
                props.setShow(false);
            }
        };
        window.addEventListener('click', clickOutsideContent);
        return () => {
            window.removeEventListener('click', clickOutsideContent);
        };
    }, [props]);

    return <div ref={modalRef} className={`modal ${props.show ? 'active' : ''}`}>
        
        <div className="modal__content">
            {
                !props.hideCloseButton && <span onClick={() => props.setShow(false)} className="modal__close">
                    &times;
                </span>
            }

            <div className="modal__header">
                <h2>{props.data.name}</h2>
            </div>
               <div className="modal__body">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom:'5%' }}>
                <img src={Imglogo} alt="" style={{ flex: 1, marginLeft: '20px', marginRight: '40px', maxWidth: '200px', maxHeight: '400px' }} />
                <p style={{ flex: 1, textAlign: 'justify' }}>
                   {props.data.description}
                </p>

            </div>
        
            <button
  style={{
    border: '0',
    outline: '0',
    padding: '0.5rem 1.5rem',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#006666',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'absolute',
    end: '1px',
    right: '20px'
  }}
  onClick={() => {
console.log("se fue");
  }}
>
  Reservar +
</button>  
            
            
        
       
            </div>

            <div className="modal__footer">

              
  
            </div>
        </div>
    </div>;
};

export default Modal;

