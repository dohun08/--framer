import Layout from "../../layout";
import * as S from './style.ts'
import PricingHead from "../../features/pricing/head";
import Faq from "../../features/pricing/faq";
import Benefit from "../../features/pricing/benefit";
import PricingBox from "../../features/pricing/pricing";
import {useEffect} from "react";

export default function Pricing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Layout>
            <S.Container>
                <PricingHead />
                <PricingBox />
                <Benefit />
                <Faq />
            </S.Container>
        </Layout>
    )
}