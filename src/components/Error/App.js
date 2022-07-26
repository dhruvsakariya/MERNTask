import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { errorState, hideNotification } from "./reduxSlice";

// bootstrap
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

// css
import "./App.css";
import styles from "./App.module.css";

export const ErrorToast = () => {
  const dispatch = useDispatch();

  const { errors } = useSelector(errorState);

  return (
    <div>
      <ToastContainer className="p-2 position-fixed " position={"bottom-end"}>
        {errors.map(
          (
            {
              iconifyIconLink,
              errorTitle,
              errorMessage,
              theme,
              time,
              autoHideTime,
              show,
              statusCode,
            },
            index
          ) => {
            let textColor;

            switch (theme) {
              case "primary":
              case "danger":
              case "success":
                textColor = "text-white";
                break;
              case "dark":
                textColor = "text-light";
                break;
              default:
                break;
            }

            return (
              <Toast
                key={index}
                onAnimationEnd={() => {
                  console.log(`Animation done with ${index}`);
                }}
                onClose={() => {
                  dispatch(hideNotification({ index: index }));
                }}
                bg={theme}
                show={show}
                delay={autoHideTime}
                autohide={autoHideTime ? true : false}
              >
                <Toast.Header>
                  {iconifyIconLink}
                  <strong className="mx-2">{errorTitle}</strong>
                  <small
                    className={`d-block mx-auto ${textColor} bg-${theme} rounded-3 px-1 `}
                  >
                    {statusCode}
                  </small>
                  <small>{time}</small>
                </Toast.Header>
                <Toast.Body className={`${textColor}`}>
                  {errorMessage}
                </Toast.Body>
              </Toast>
            );
          }
        )}
      </ToastContainer>
      {/* <Toast
          onClose={() => setShow(false)}
          className={styles.toastBoxShadow}
          show={show}
          delay={3000}
          autohide={false}
        >
          <Toast.Banner>
            <img
              src="https://via.placeholder.com/20/92c952"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Banner>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast> */}
    </div>
  );
};
