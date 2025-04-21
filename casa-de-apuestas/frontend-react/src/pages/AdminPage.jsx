import ProfileAdminHeader from "../components/profiles/admin/ProfileAdminHeader";
// import ProfileAdminContent from "../components/profiles/admin/ProfileAdminContent";
import Counter from "../components/home/Counter";
import Video from "../components/UI/Video";
import CrearEvento from "../components/profiles/admin/CrearEvento";



const AdminPage = () =>{
    return (
        <>
            <ProfileAdminHeader/>
            {/* <ProfileAdminContent /> */}
             {/* <Counter/> */}
             <CrearEvento/>
            <Video />  
        </>
    );
};

export default AdminPage;