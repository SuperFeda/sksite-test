import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceUpInfo from "../../components/ServiceUpInfo";
import {translate} from "../../scripts";
import {services} from "../../data/services";

import "../../css/service.css"
import "../../css/styles.css"

export default function CharactersDesign() {
    React.useEffect(() => {
        document.title = translate("title.services-page.characters-design");
    }, []);

    return (
        <div id={"box"}>

            <Header/>

            <main id={"service-main"}>
                <ServiceUpInfo service={services.characters_design}/>
                <div className="examples">
                    <h2 className="work-example-title">{translate("service-info-page.chapter.work-examples")}</h2>
                    <div className="work-example-imgs">
                        <img src="/img/png/services/characters_design_example.png" className="work-example-img" alt="skins-exemple"/>
                        <img src="/img/png/services/characters_design_example_2.png" className="work-example-img" alt="skins-exemple"/>
                    </div>
                </div>
            </main>

            <Footer/>

        </div>
    )
}