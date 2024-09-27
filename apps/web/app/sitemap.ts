export default function sitemap() {
    const baseUrl = 'https://fitnopolis.com'

    return [
        {
            url: baseUrl,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/productos`,
            lastModified: new Date()
        },
    ]
}