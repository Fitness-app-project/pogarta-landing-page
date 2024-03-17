import Image from "next/image"


export const Screen7 = () => {
    const offers = [
        { title: 'Project Manager', details: '3 040 - 4 300 USD Net/month  B2B' },
        { title: 'Frontend Developer', details: '4 050 - 6 070 USD Net/month  B2B' },
        { title: 'Backend Developer', details: '5 820 - 7 590 USD Net/month  B2B' },
        { title: 'UX/UI Designer', details: '5 060 - 5 820 USD Net/month  B2B' },
        { title: 'QA Engineer', details: '4 820 - 6 200 USD Net/month  B2B' },
        { title: 'Fullstack Developer', details: '6 800 - 8 070 USD Net/month  B2B' },
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
                    <div key={index} className="bg-black bg-opacity-10 p-10 rounded-full flex items-center space-x-4 w-[calc(50%-4rem)] ">
                        <div className="flex-1 ml-10">
                            <h2 className="text-2xl text-[#D9B55E]">{offer.title}</h2>
                            <p className="text-[#B7B7B7] text-lg">{offer.details}</p>
                        </div>
                        <div className="ml-auto"> 
                            <button className="bg-[#747474] bg-opacity-30 hover:bg-gray-600 text-[#D9B55E] py-3 px-6 rounded-full transition duration-300 ml-5">
                                KNOW MORE →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        ))}
    </div>
    
    
    );
};
