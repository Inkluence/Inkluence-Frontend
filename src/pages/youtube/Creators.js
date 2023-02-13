
import NormalProcess from "../../assets/img/normal_process.png";
import InkProcess from "../../assets/img/ink_process.png";
import CreatorsList from "../../components/youtube/Creators";
const Creators = () => {
    return(
        <div id="creators" className="youtube-process">
            <div className="text-white">
                <span className="title">CREATORS</span>
                <div className="content">
                    <CreatorsList/>
                </div>
            </div>
        </div>
    );
};
export default Creators;