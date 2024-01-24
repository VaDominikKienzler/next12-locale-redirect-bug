export default function Index({locale}) {
    return (
        <div>
            <h1>Index {locale}</h1>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            locale: context.locale
        }
    }
}
