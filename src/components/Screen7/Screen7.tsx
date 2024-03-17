import Image from "next/image"


export const Screen7 = () => {
    const offers = [
        { title: 'Project Manager', details: '3 040 - 4 550 USD Net/month - B2B' },
        { title: 'Frontend Developer', details: '3 040 - 4 550 USD Net/month - B2B' },
        { title: 'Backend Developer', details: '3 040 - 4 550 USD Net/month - B2B' },
        // Assuming you have three more offers to include:
        { title: 'UX/UI Designer', details: '3 040 - 4 550 USD Net/month - B2B' },
        { title: 'QA Engineer', details: '3 040 - 4 550 USD Net/month - B2B' },
        { title: 'DevOps Engineer', details: '3 040 - 4 550 USD Net/month - B2B' },
    ];

    const chunkArray = (arr: any[], chunkSize: number) => {
        let results = [];
        while (arr.length) {
            results.push(arr.splice(0, chunkSize));
        }
        return results;
    };

    const chunkedOffers = chunkArray([...offers], 2);

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#383838]">
        <h1 className="text-6xl font-medium text-[#D9B55E] mb-20">Current job offers</h1>
        {chunkedOffers.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="flex justify-center space-x-8 mb-8">
                {chunk.map((offer, index) => (
                    <div key={index} className="bg-black bg-opacity-10 p-10 rounded-full flex justify-between items-center w-[calc(50%-4rem)]">
                        <div>
                            <h2 className="text-2xl text-[#D9B55E]">{offer.title}</h2>
                            <p className="text-[#B7B7B7] text-lg">{offer.details}</p>
                        </div>
                        <button className="bg-[#747474] bg-opacity-30 hover:bg-gray-600 text-[#D9B55E] py-3 px-6 rounded-full transition duration-300">
                            KNOW MORE →
                        </button>
                    </div>
                ))}
            </div>
        ))}
    </div>
    
    );
};
