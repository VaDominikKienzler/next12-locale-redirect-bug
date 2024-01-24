import useTranslation from "next-translate/useTranslation";

export default function Index({locale}) {
    const {lang} = useTranslation()

    return (
        <div>
            <h1>Index {lang}/{locale}</h1>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            locale: context.locale,
        },
        revalidate: 10
    }
}
