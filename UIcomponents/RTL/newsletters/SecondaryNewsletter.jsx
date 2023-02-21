export default () => {
    return (
        <section className="items-center py-12 max-w-screen-xl mx-auto px-4 gap-4 md:flex md:px-8 xl:gap-12">
            <div className="flex-1 space-y-3">
                <h3 className="text-2xl text-gray-800 font-bold lg:text-3xl">
                    اشترك في نشرتنا الإخبارية
                </h3>
                <p className="text-gray-400 leading-relaxed">
                    ابق على اطلاع دائم بتقدم خارطة الطريق والإعلانات والخصومات الحصرية لا تتردد في التسجيل باستخدام بريدك الإلكتروني.  
                </p>
            </div>
            <div className="mt-6 flex-1">
                <form 
                    onSubmit={(e) => e.preventDefault()}
                    className="items-center justify-center sm:flex">
                    <input 
                        type="email"
                        placeholder="إدخل البريد اﻹلكتروني"
                        className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
                    />
                    <button
                        className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:mr-3 sm:w-auto"
                    >
                        اشتراك
                    </button>
                </form>
                <p className="mt-3 text-[15px] text-gray-400">
                    تحديثات المنتج والإعلانات والخصومات.
                    إقرأ <a className="text-indigo-600 underline" href="javascript:void(0)"> سياسة الخصوصية </a>
                </p>
            </div>
        </section>
    )
}