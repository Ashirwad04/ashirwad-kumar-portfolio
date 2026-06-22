import useMeta from "../../../hooks/useMeta";

function Learning() {
    useMeta({
        title: "Learning Projects — Ashirwad Kumar",
        description: "Projects built by Ashirwad Kumar while exploring and learning new technologies.",
        keywords: "learning projects, Ashirwad Kumar, new technologies",
        url: "https://ashirwadkumar.com/projects/learning",
    });
    return (
        <section className="Learning-projects">
            <h1>Zoho Learning Projects</h1>
            <p>
                Explore the custom business applications I have developed using Zoho Learning, showcasing my expertise in building efficient and user-friendly solutions.
            </p>
        </section>
    );
}


export default Learning;