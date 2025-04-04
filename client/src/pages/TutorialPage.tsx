import { TutorialStep } from "@/components/TutorialStep";
import { BackToTop } from "@/components/BackToTop";
import { useEffect } from "react";

const TutorialPage = () => {
  useEffect(() => {
    document.title = "Hướng Dẫn Đổi Thông Tin ACC Minecraft";
  }, []);

  return (
    <div className="bg-gray-100 font-sans text-gray-800 min-h-screen pb-10">
      {/* Tutorial Container */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Main Tutorial Content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tutorial Header */}
          <div className="relative">
            <img
              src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXckmr69ECLHFLBUjWp19FJnZvAWbDLlycgV3Ok488eN-EiPe9pNB0Y7HGlPhWHdIWmVdcDirkqfnJd4lg4_4twNqGSRsSualtyKq5f3pc42hAWyk9D4_JJQRXBxyDmM5lIJLo0uQje5fhu018H-u3_CgeVt?key=Q-2Z68ni5Vu1rWcIKWMZow"
              alt="Minecraft Header Image"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Tutorial Title and Introduction */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">THỰC HIỆN CÁC BƯỚC SAU</h1>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <p className="text-lg font-medium">
                Để đổi thông tin acc Minecraft mua tại <span className="text-blue-600">PIKAMC.SHOP</span> thành của riêng bạn
              </p>
            </div>

            {/* Step 1 */}
            <TutorialStep 
              number={1} 
              title="Truy cập vào login.microsoftonline.com"
              link="http://login.microsoftonline.com/"
            />

            {/* Step 2 */}
            <TutorialStep 
              number={2} 
              title='Nhập email shop gửi => nhấn tiếp tục và nhấn "QUÊN MẬT KHẨU"'
              imageUrl="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcaIbH0CxJiEys6bSUhnOeNn9eAUNDR2FqB_e1KUIsLp0ACYDLMkpJ3jp1lXt8MXefo2BFCbl1NsFWWzIFQ0KtRlxlYrNIXOC9vPCg3Zdqjg8sbhl7I870DTelhc8zM3toeaD9wJJX_WM-wkrfXuTIyX6g?key=jOVa63G-VgzB8z4E14ODmQ"
              imageAlt="Nhập email và quên mật khẩu"
            />

            {/* Step 3 */}
            <TutorialStep 
              number={3} 
              title='Ấn tiếp tục vào dòng chữ " i dont have any of these " hoặc "Tôi không có thứ gì trong số này" Tiếp tục chọn "Tôi có một mã"'
              imageUrl="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcYBX4ir-cfetTE-HLWJx-TXg_GM3uZ6s1KBdNVksEFeGVq0D1GcthtBo7cikf-EDKDAP0XSseuubjMYeIqrHSfEaVJPQEqE_N8Az5jJjKjEH9L_cTcTkFa-QtZOU9Os7Yj_MI6eBXp1rMgRYsIh3hc0F4B?key=jOVa63G-VgzB8z4E14ODmQ"
              imageAlt="Chọn tôi không có thứ gì trong số này"
            />

            {/* Step 4 */}
            <TutorialStep 
              number={4} 
              title="Nhập mã khôi phục shop giao."
              imageUrl="https://lh7-rt.googleusercontent.com/docsz/AD_4nXe9LxnTP8oeCVGR6IJRYY9-1VnInCkGrpOX2fsb7yoFIu_LrMOWpOXf2DgQlxR9vVw-lEdIWquGxiMDaBLt3J7ykxYCZDf_ramGeQ4LMJOp66fB8yF-d_3Kb91MbH7ZuD1J9ixgX1eJjLFtUf2zNMD0tLNI?key=jOVa63G-VgzB8z4E14ODmQ"
              imageAlt="Nhập mã khôi phục"
            />

            {/* Step 5 */}
            <TutorialStep 
              number={5} 
              title='Sau khi đã nhập RECOVERY CODE bạn ấn tiếp tục vào " Use recovery code "'
              imageUrl="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcK1BbIWLiM3TLYzzCYKYQwraMs9dqGPj70RDnMyhsd8LJF_Pn-qdHysqvyZAIrKi44qz3J_nBy0AcFl8H1ll5IyggbXIUSa46QNkKIh3rO9PVGuYAXqExgGFz9LLBxZkXQPQ2U_eZcmV2OrG7V-86IRtRA?key=jOVa63G-VgzB8z4E14ODmQ"
              imageAlt="Ấn tiếp tục vào Use recovery code"
            />

            {/* Step 6 */}
            <TutorialStep 
              number={6} 
              title="Nhập mail của bạn (mail này sẽ lấy mã khi bạn đăng nhập lần sau)"
              imageUrl="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdOpoUV1FCpnNo0VARNZPGhwECCe9cwzp80wscriooXrIcrxxFIq77I8oOBbktt-UofWzHS7nhrDlkpchq-NcMQ7DThvxWwiykfhb7dl6ZEiSFpLE52sRliKltNQJi0fZsNsfabrMDmpF7y-cdfOUBMJ1A?key=jOVa63G-VgzB8z4E14ODmQ"
              imageAlt="Nhập mail của bạn"
            />

            {/* Step 7 */}
            <TutorialStep 
              number={7} 
              title="Lấy mã code trong email của bạn và nhập vào nhé để xác thực"
              imageUrl="https://lh7-rt.googleusercontent.com/docsz/AD_4nXewEwW2Z8DsPUji0Eg9v8YHWZ0kP4mPawCPKxN3RAx44eVFmgTLLb2PRxpk3S3mffFzcSbYwhF1LLu6_7quv4yCurS4t5HhQBOEeZ_YAYTOC23z2QSwZdNmj427pC2AGYs_jL8ck9cYHNFLPjsMKW8t66p4?key=jOVa63G-VgzB8z4E14ODmQ"
              imageAlt="Nhập mã xác thực từ email"
            />

            {/* Step 8 */}
            <TutorialStep 
              number={8} 
              title="Tạo mật khẩu mới cho tài khoản Minecraft của bạn"
              imageUrl="https://lh7-rt.googleusercontent.com/docsz/AD_4nXedt8FcJu8iixsZ_KEq706Dwb9YwoTV6wDNDsbYL0JzyW53QwPeEdILFajVwHZPjr43nK9_snVNKnSUELzgxgAXyWVvXBiD7n-vxSZe7eZuX1Rnz6ByzP5Is_gzYFKvEhSzQJ56OLXogiscbZ5EsUhKJG8?key=jOVa63G-VgzB8z4E14ODmQ"
              imageAlt="Tạo mật khẩu mới"
            />

            {/* Step 9 */}
            <TutorialStep 
              number={9} 
              title="Nhấn NEXT để hoàn thành"
            />

            {/* Completion Message */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
              <h3 className="text-lg font-bold text-green-800">HOÀN THÀNH ĐỔI THÔNG TIN BẢO MẬT</h3>
              <p className="mt-2">
                Bạn đã đổi xong email liên kết bảo mật cho tài khoản của bạn. Lúc này shop không còn có thể truy cập vào tài khoản của bạn được nữa vì email liên kết bảo mật đã liên kết qua email của bạn.
              </p>
            </div>

            {/* Part 2 - Change Login Email */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">THAY ĐỔI EMAIL ĐĂNG NHẬP</h2>
              <p className="mb-4">Sau khi đổi mail bảo mật ta đi đổi mail đăng nhập qua mail của bạn</p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
                <p>
                  Sau khi đổi email bảo mật, nó chỉ là email bảo mật gắn với tài khoản thôi nên tên đăng nhập vẫn như cũ. Vì vậy chúng ta cần đi thay đổi tên đăng nhập thành mail của bạn luôn cho tiện sau này sử dụng cho dễ.
                </p>
              </div>
              
              <p className="mb-4">Sau khi đăng nhập vào <a href="http://account.microsoft.com/" className="text-blue-600 hover:underline">account.microsoft.com</a> thành công, bạn sẽ thấy giao diện như sau:</p>
              
              <div className="mb-6">
                <img 
                  src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdu-a-x2HvtxXFOxwQ0Feag75LKGwlZRJ3ilLtvHPwjPujcNtLIKoLZt6JU45yufjYTnPSPZ1uLOsUl4ffnFHpzAkVt-sbcg3fVhnFnNNCcLcGhwPQwbGouNSz57jIwF0ZecvMeZ6V1UTRuWeFe8WbL1Pp2?key=jOVa63G-VgzB8z4E14ODmQ" 
                  alt="Microsoft Account Interface" 
                  className="w-full md:w-4/5 mx-auto rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform"
                />
              </div>
              
              <p className="mb-4 font-medium">Chọn Edit account info</p>
              
              <div className="mb-6">
                <img 
                  src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdimkL5QOfRsCWb7kwygQ_lLupf4dtudc61SKOy1iJLoP3MKY1FYTLCwlfg4ODmy3-7D0R1vpFe4hw2uOdE_Zfy-KawO66kqzLMqvTFmezuRJMwWAXZULtd-6gvvLHULiLL26iDx53H99OG5_fAYtPeQrBY?key=jOVa63G-VgzB8z4E14ODmQ" 
                  alt="Edit account info" 
                  className="w-full md:w-4/5 mx-auto rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform"
                />
              </div>
              
              <p className="mb-4 font-medium">Bạn chọn Add EMAIL</p>
              
              <div className="mb-6">
                <img 
                  src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfKziB4Oego_AW_XOVXXuWHqK5rcWyctzIqKxz-8JEuE5-CH7I9_0L6MVnUcBhzGSU5XRcj6LmEEsCd3KaEeYRnn1P7oZcUz_wIHaJEEi4tSOSjPOXGkdYCRzOf-9yfyuZUkJRwDGASGuCdm95yOBz45cd_?key=jOVa63G-VgzB8z4E14ODmQ" 
                  alt="Add Email Option" 
                  className="w-full md:w-4/5 mx-auto rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform"
                />
              </div>
              
              <p className="mb-2">Nhập địa chỉ mail của bạn vào</p>
              <p className="mb-4 font-medium">Chọn Add existing email address as a Microsoft account alias.</p>
              
              <div className="mb-6">
                <img 
                  src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcYH8KVkdf8dEDQqVBN5tr_QB3KDV-BLmlOct24djUMbLivMpvImSa8eBUxQcHwsaGSuyGCCoabRMzvyvloOBT9F5S6cEW7GJSj4U7upsgUf9z6r0D_PWS_lvJ-yr_1A8IHRIGWZZqh5itPWtG1uivkxxD5?key=jOVa63G-VgzB8z4E14ODmQ" 
                  alt="Add existing email" 
                  className="w-full md:w-4/5 mx-auto rounded-lg border border-gray-200 shadow-sm mb-4 cursor-pointer hover:scale-[1.02] transition-transform"
                />
                
                <img 
                  src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdvp25XGxBXjbGrF0RCEihTMqcip6OYZYX-T9AH7DHq7dKdJzzP4xfGkwI2LY2Ip2RzLEigSe2B7xXL-ub_Y2P8oJuslbUMM4Uf1_P2g1lSKlhf9rC1zkBkwa_5Ggg4bgNdbytZ6I1c53vb8V7KQ4UR-reT?key=jOVa63G-VgzB8z4E14ODmQ" 
                  alt="Email verification" 
                  className="w-full md:w-4/5 mx-auto rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform"
                />
              </div>
              
              <p className="mb-2">Sau khi add thành công. Tiếp theo hãy VERIFY EMAIL</p>
              <p className="mb-4">Sau đó 1 email sẽ gửi tới hòm thư của email mới của bạn. Và bạn click vào link bên trong để trở lại trang này.</p>
              <p className="mb-2 font-medium">Sau đó hãy chọn MAKE PRIMARY (hoặc ĐẶT LÀM BÍ DANH CHÍNH)</p>
              <p className="mb-4">Hãy bấm XÁC NHẬN</p>
              
              <div className="mb-6">
                <img 
                  src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXd3B04tVFbHndSd4u4MhgrgCRoO1f72PQPh3Z6P3_d10Tr5BIUAVpHFs280NCfcem5HZ3nwaMj-yfEbaS7yrgORn4thJoZbtVRE1H8rOghSQXfiagCzOAO3GsM2GXIhwTlEaDui7q2y_2tql6i6i3xoqAfW?key=jOVa63G-VgzB8z4E14ODmQ" 
                  alt="Make Primary" 
                  className="w-full md:w-4/5 mx-auto rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform"
                />
              </div>
              
              <p className="mb-4 font-medium">Việc cuối cùng là xóa email của shop đi.</p>
              
              <div className="mb-6">
                <img 
                  src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeCjGfIAHA_Z3zzc6FzwVMI3rEs8XFlbI9lUrs_BkLvHxfRgM3DM0HSPq-OYb4TpjYX93LKrdNZoyUwBj37UN61X5OijpRZl_ygRMWKTQ2Dvnr4ARD0G9BAtT6b8z6h0Z4muqECfaBQ_2KLjN6ziwG5px4?key=jOVa63G-VgzB8z4E14ODmQ" 
                  alt="Remove old email" 
                  className="w-full md:w-4/5 mx-auto rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform"
                />
              </div>
              
              <p className="mb-4">Bây giờ bí danh chính cũ, bạn loại bỏ nó đi bằng cách ấn " Xóa " ( remove ).</p>
              
              <div className="mb-6">
                <img 
                  src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXc98C65yJJg0H0Fr88HUlD0d4JcKCgT6qpuUqwUcZ0ZViiNS1NpIp0iHPtg9yO9X8ZvpEibOSqnUftycHDHLsZyfmoRJiai7LaiDwh7OTqIyM6Y2bKbDKKq5OEgIzma2fX-N_Kly1RiGVS9idKZo-JdgMeb?key=jOVa63G-VgzB8z4E14ODmQ" 
                  alt="Confirm removal" 
                  className="w-full md:w-4/5 mx-auto rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform"
                />
              </div>
              
              <p className="mb-6">Từ đây bạn có thể vào nick MINECRAFT thông qua email của bạn.</p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
                <p className="font-bold">
                  SAU KHI THỰC HIỆN 2 PHẦN THAY ĐỔI THÔNG TIN NHƯ TRONG BÀI VIẾT NÀY ĐÃ HƯỚNG DẪN BẠN ĐÃ HOÀN TOÀN THAY ĐỔI THÔNG TIN QUA EMAIL RIÊNG CỦA BẠN RỒI ĐẤY.
                </p>
              </div>
            </div>

            {/* Additional Guides */}
            <div className="mt-12 border-t pt-8">
              <h2 className="text-xl font-bold mb-4 text-blue-600">Hướng dẫn hữu ích khác</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="https://pikamc.vn/huong-dan-doi-skin-ten" className="text-blue-600 hover:underline">
                    Hướng dẫn đổi skin và tên trong Minecraft Java & Bedrock
                  </a>
                </li>
                <li>
                  <a href="https://pikamc.vn/huong-dan-tai-game-Minecraft" className="text-blue-600 hover:underline">
                    Hướng dẫn tải game Minecraft Java & Bedrock
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default TutorialPage;
