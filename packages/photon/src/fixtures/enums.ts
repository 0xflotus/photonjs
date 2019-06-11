export const enums = /* GraphQL */ `
  model User {
    id: String @id @default(cuid())
    name: String
    email: String @unique
    status: String
    nicknames: String[]
    permissions: Permission[]
    favoriteTree: Tree
    location: Location
    posts: Post[]
  }

  model Post {
    id: String @id @default(cuid())
    name: String
    email: String @unique
    createdAt: DateTime @default(now())
    updatedAt: DateTime @updatedAt
  }

  model Location {
    id: Int @id
    city: String
  }

  enum Tree {
    ARBORVITAE
    YELLOWBIRCH
    BLACKASH
    DOUGLASFIR
    OAK
  }

  enum Permission {
    ADMIN
    USER
    OWNER
    COLLABORATOR
  }
`