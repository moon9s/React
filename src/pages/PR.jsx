import Pr from "../components/Pr"
import { pr } from "../constants/pr"

export default function PR() {
    return (
        <section className=" mx-auto p-8 min-h-screen mt-10 md:mt-0 bg-[#c8ddf7] ">

            <h2 className="text-3xl font-bold text-blue-800 bg-blue-50 w-fit px-8 py-3 rounded-full border border-blue-100 shadow-sm mb-8">
                محصولات
            </h2>
            <div className="container mx-auto flex justify-start gap-10 flex-wrap pt-40">
                {
                    pr.map(item => {
                        return (
                            <Pr item={item} />
                        )
                    })
                }

            </div>

        </section>
    )
}