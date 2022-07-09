export default function Image({ folder, fileName, alt}) {
    return (
        <picture>
            <source srcset={process.env.PUBLIC_URL + '/images/' + folder + '/' + fileName + '.webp'} />
            <img src={process.env.PUBLIC_URL + '/images/' + folder + '/' + fileName + '.jpg'} alt={alt} />
        </picture>
    )
}