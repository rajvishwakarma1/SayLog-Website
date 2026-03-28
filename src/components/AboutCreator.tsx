import Image from "next/image";

export default function AboutCreator() {
    return (
        <section className="bg-stone-50/50">
            <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-stone-text flex items-center gap-3 mb-8">
                    Hi, I&apos;m Raj <span className="text-2xl md:text-3xl">👋</span>
                </h2>

                <div className="space-y-6 text-stone-text-secondary leading-relaxed md:text-lg">
                    <p>
                        I built SayLog because tracking calories was always a chore - typing every meal, searching databases, or clicking pictures felt like too much friction for something you do multiple times a day.
                    </p>

                    <p>
                        I went with a <strong className="font-semibold text-stone-text">voice-first approach</strong> because it was simply too time-consuming to type or click a picture every time I ate something. Speaking felt natural - like telling a friend what you had for lunch.
                    </p>

                    <p>
                        As a full-stack builder and designer, I wanted to create a calorie tracking experience that felt <strong className="font-semibold text-stone-text">incredible</strong> to use - so great design and interaction was something I put a lot of time into.
                    </p>

                    <p>
                        Hopefully you feel that when you use it, and SayLog helps you as much as it&apos;s helped me :)
                    </p>
                </div>

                <div className="mt-12 flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-sm">
                        <Image
                            src="/rv.jpeg"
                            alt="Raj Vishwakarma"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <p className="font-bold text-stone-text">Raj Vishwakarma</p>
                        <p className="text-sm text-stone-text-tertiary">Creator of SayLog</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
