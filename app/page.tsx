import { allPosts } from 'contentlayer/generated'
import Hero from '@/components/hero'
import PostItem from './post-item'
import Talks from '@/components/talks'
import FeaturedProjects from '@/components/featured-projects'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'
import WidgetBook from '@/components/widget-book'

export const metadata = {
  title: 'Home - Code Bunny',
  description: 'Code Bunny website',
}

export default async function Home() {

  // Sort posts by date
  allPosts.sort((a, b) => {
    return (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1
  }) 

  return (
    <>
      <Hero />
      { /* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">

        { /* Middle area */}
        <div className="grow">
          <div className="max-w-[700px]">
            <div className="space-y-10">

              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-3">Latest Articles</h2>

                {/* Articles list */}
                <div>
                  {allPosts.map((post, postIndex) => (
                      <PostItem key={postIndex} {...post} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        { /* Right sidebar */}
        <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <div className="space-y-6">

          </div>
        </aside>

      </div>
    </>
  )
}
