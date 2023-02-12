
import Logo from "../../assets/img/ink_logo.png";


const AboutUs = () => {
    return(
        <div id="about" className="youtube-about">
            <div className="text-white">
                <div>
                    <img src={Logo} width="25%" alt=""/>
                    <p className="main-lead lead my-3">Spread Like Ink</p>
                    <div className="my-5">
                    <p className="lead mb-0">
                        크리에이터의 전문성과 광고주의 니즈를 결합시켜, 최상의 퍼포먼스를 만들어내는 회사입니다.
                        <br/><br/>
                        INK의 창업자들은 MCN이 등장한 초기부터 트레져헌터, Collab Asia를 거쳐 픽셀네트워크 창업까지<br/>
                        게임/IT/라이프스타일 분야에서 3,000여건이 넘는 광고를 책임감있게 진행해왔습니다.
                <br/> <br/>
                        해당 과정에서 쌓아올린 광고주, 크리에이터와의 신뢰를 바탕으로 직접 컨택이 가능한 크리에이터분들을 리스트업하여<br/>
                        불필요한 마진과 느린 소통을 개선하고 광고주 니즈에 가장 어울리는 크리에이터를 매칭하여 최상의 퍼포먼스를 만들고자 합니다.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;