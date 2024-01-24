import useTranslation from "next-translate/useTranslation";

export default function Index() {
    const {lang} = useTranslation()

    return (
        <div>
            <h1>Index {lang}</h1>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {}
    }
}
