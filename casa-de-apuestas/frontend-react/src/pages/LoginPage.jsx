



// const LoginPage = () => {
//     const [apiNotification, contextHolder] = notification.useNotification();
  
//     const contextValue = useMemo(
//       () => ({ name: "Notification Context Default" }),
//       []
//     );
  
//     const handleOnError = ({ message, description }: NotificationError) => {
//       apiNotification.error({
//         message,
//         description: (
//           <NotificationContext.Consumer>
//             {() => <p>{description}</p>}
//           </NotificationContext.Consumer>
//         ),
//         placement: "topRight",
//       });
//     };
  
//     return (
//       <AuthPage title="Iniciar Sesion">
//         <NotificationContext.Provider value={contextValue}>
//           {contextHolder}
//           <LoginForm onError={handleOnError} />
//         </NotificationContext.Provider>
//       </AuthPage>
//     );
//   };

const LoginPage = () =>{
    return (
        <>
            <div>
                <h1>
                    soy la page login
                </h1>
            </div>
        </>
    );
};

export default LoginPage;