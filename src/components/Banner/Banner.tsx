interface Props {
    content: String
}

export default function Banner({ content }: Props) {
    return (
        <div className="w-full h-fit p-2 bg-red-400 absolute flex justify-center items-center z-[10000000]">
            <p className="text-white">{ content }</p>
        </div>
    )
}