import ProfileAdminHeader from "../components/profiles/admin/ProfileAdminHeader";
// import ProfileAdminContent from "../components/profiles/admin/ProfileAdminContent";
import Counter from "../components/home/Counter";
import Video from "../components/UI/Video";



const AdminPage = () =>{
    return (
        <>
            <ProfileAdminHeader/>
            {/* <ProfileAdminContent /> */}
             <Counter/>
            <Video />  
        </>
    );
};

export default AdminPage;