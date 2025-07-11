export default function ArchiveLayout({archive, latest}) {
    return(
        <>
        <div>
            <h1>News Archive</h1>
            <section className="archive-filter">{archive}</section>
            <section className="archive-latest">{latest}</section>
        </div>
        </>
    )
}