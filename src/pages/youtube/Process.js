
import NormalProcess from "../../assets/img/normal_process.png";
import InkProcess from "../../assets/img/ink_process.png";
import "../../assets/scss/youtube.scss";

const Process = () => {
    return(
        <div id="process" className="youtube-process">
            <div className="text-white">
                <span className="title">PROCESS</span>
                <div className="content">
                    <img src={NormalProcess} alt="" className="my-5 process-image"/>
                    <img src={InkProcess} alt="" className="image process-image"/>
                    <p className="process-text my-5">빠른 커뮤니케이션 및 광고 희망여부 파악<br/>
                        불필요한 영업 마진을 제거한 최적의 단가 확보</p>
                </div>
            </div>
        </div>
    );
};
export default Process;