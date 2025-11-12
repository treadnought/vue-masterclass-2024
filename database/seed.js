/* eslint-env node */

import { fakerEN_AU as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

const seedProjects = async () => {
    const name = faker.lorem.words(3)

    await supabase.from('projects').insert({
        name: name,
        slug: faker.helpers.slugify(name),
        status: faker.helpers.arrayElement(['in-progress', 'completed']),
        collaborators: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
    })
}

await seedProjects()
