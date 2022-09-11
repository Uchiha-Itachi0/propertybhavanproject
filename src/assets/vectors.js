import React from "react";

const Icons = {
    Bed:<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.07471 37.1434H48.3212" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.07422 8.76636V43.6916" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.07422 17.4983H43.9961C45.1431 17.4983 46.243 17.9582 47.0541 18.777C47.8651 19.5957 48.3207 20.7061 48.3207 21.8639V43.6922" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.7241 17.4983V37.1437" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>,
    Bath: <svg width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.1022 14.063L14.6963 8.60594C14.1418 7.97443 13.3672 7.58344 12.534 7.51453C10.7674 7.51453 9.29053 9.0054 9.29053 10.7888V38.0741C9.29053 39.2319 9.74616 40.3424 10.5572 41.1611C11.3682 41.9798 12.4682 42.4397 13.6152 42.4397H39.5631C40.7101 42.4397 41.8101 41.9798 42.6211 41.1611C43.4321 40.3424 43.8877 39.2319 43.8877 38.0741V27.16" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.2646 11.8802L17.9399 16.2459" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.96582 19.8839H48.2123" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.7773 42.4397V46.8053" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M37.4009 42.4397V46.8053" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>,
    DoubleBed:<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.83643 43.7871V26.654C4.83643 25.518 5.29206 24.4285 6.10309 23.6253C6.91412 22.822 8.01411 22.3707 9.16108 22.3707H43.7583C44.9053 22.3707 46.0052 22.822 46.8163 23.6253C47.6273 24.4285 48.0829 25.518 48.0829 26.654V43.7871" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.16113 22.3707V13.8042C9.16113 12.6682 9.61676 11.5787 10.4278 10.7754C11.2388 9.97215 12.3388 9.52087 13.4858 9.52087H39.4337C40.5807 9.52087 41.6807 9.97215 42.4917 10.7754C43.3027 11.5787 43.7584 12.6682 43.7584 13.8042V22.3707" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.4595 9.52087V22.3707" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.83643 39.5039H48.0829" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>,
    Expand: <svg width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45.7913 46.7937L32.8174 33.6968M45.7913 46.7937V36.3162M45.7913 46.7937H35.4122" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.86914 36.3162V46.7937M6.86914 46.7937H17.2483M6.86914 46.7937L19.8431 33.6968" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M45.7913 17.9804V7.50281M45.7913 7.50281H35.4122M45.7913 7.50281L32.8174 20.5998" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.86914 17.9804V7.50281M6.86914 7.50281H17.2483M6.86914 7.50281L19.8431 20.5998" stroke="#352089" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>,
    CheckCircle: <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.8164 8.77172V9.50006C17.8154 11.2072 17.2499 12.8683 16.2043 14.2357C15.1587 15.603 13.6889 16.6033 12.0142 17.0873C10.3395 17.5714 8.54964 17.5132 6.9115 16.9216C5.27337 16.33 3.87475 15.2366 2.92425 13.8044C1.97374 12.3722 1.52228 10.6781 1.63718 8.97464C1.75209 7.27117 2.42721 5.64965 3.56185 4.3519C4.6965 3.05416 6.22987 2.14973 7.93329 1.7735C9.63671 1.39728 11.4189 1.56941 13.0141 2.26422" stroke="#412D8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.8165 3.16675L9.71809 11.0913L7.28857 8.71633" stroke="#412D8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>,
    Cloud: <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.7219 13.4V14.0933C43.8434 14.9676 46.4445 16.6122 48.0716 18.7403C49.6988 20.8684 50.2487 23.345 49.6255 25.7382C49.0024 28.1313 47.2457 30.2893 44.6617 31.8357C42.0778 33.3821 38.8305 34.2188 35.4863 34.2V34.2H16.9238C13.6195 34.1401 10.446 33.2471 7.94475 31.6734C5.44346 30.0997 3.76923 27.9426 3.20764 25.5702C2.64604 23.1978 3.23187 20.757 4.86519 18.664C6.49851 16.5711 9.07816 14.9557 12.1641 14.0933V13.4C12.1641 10.6417 13.6685 7.99646 16.3463 6.04609C19.0241 4.09571 22.656 3 26.443 3C30.23 3 33.8619 4.09571 36.5397 6.04609C39.2175 7.99646 40.7219 10.6417 40.7219 13.4V13.4Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.4414 34.1997V54.9997" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M55 44.6001V55.0001" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>,
    Hospital1: <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 56H56" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.834 45.3993V26.8494" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.6113 45.3993V26.8494" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35.3887 45.3993V26.8494" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M47.166 45.3993V26.8494" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.5009 3L53.0564 16.25H5.94531L29.5009 3Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>,
    Hospital2: <svg width="57" height="47" viewBox="0 0 57 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.1668 41.7739V27.9344H38.8335V41.7739H46.5835V4.86854H10.4168V41.7739H18.1668ZM23.3335 41.7739H33.6668V32.5476H23.3335V41.7739ZM51.7502 41.7739H56.9168V46.3871H0.0834961V41.7739H5.25016V2.56196C5.25016 1.95021 5.52233 1.36352 6.0068 0.930954C6.49127 0.498385 7.14835 0.255371 7.8335 0.255371H49.1668C49.852 0.255371 50.5091 0.498385 50.9935 0.930954C51.478 1.36352 51.7502 1.95021 51.7502 2.56196V41.7739ZM25.9168 14.0949V9.48171H31.0835V14.0949H36.2502V18.708H31.0835V23.3212H25.9168V18.708H20.7502V14.0949H25.9168Z" fill="white"/>
    </svg>,
    Bus: <svg width="62" height="56" viewBox="0 0 62 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.5 50.1053H15.5V53.0526C15.5 53.8343 15.1734 54.584 14.592 55.1367C14.0107 55.6895 13.2222 56 12.4 56H9.3C8.47783 56 7.68933 55.6895 7.10797 55.1367C6.52661 54.584 6.2 53.8343 6.2 53.0526V50.1053H3.1V26.5263H0V14.7368H3.1V5.89474C3.1 4.33136 3.75321 2.83201 4.91594 1.72653C6.07866 0.621051 7.65566 0 9.3 0H52.7C54.3443 0 55.9213 0.621051 57.0841 1.72653C58.2468 2.83201 58.9 4.33136 58.9 5.89474V14.7368H62V26.5263H58.9V50.1053H55.8V53.0526C55.8 53.8343 55.4734 54.584 54.892 55.1367C54.3107 55.6895 53.5222 56 52.7 56H49.6C48.7778 56 47.9893 55.6895 47.408 55.1367C46.8266 54.584 46.5 53.8343 46.5 53.0526V50.1053ZM9.3 5.89474V32.4211H52.7V5.89474H9.3ZM9.3 38.3158V44.2105H21.7V38.3158H9.3ZM40.3 38.3158V44.2105H52.7V38.3158H40.3Z" fill="white"/>
    </svg>,
    Gym: <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5927 48.827C18.7948 49.0461 18.9023 49.3362 18.8918 49.6341C18.8812 49.9319 18.7536 50.2137 18.5365 50.418L16.0962 52.6999C15.8783 52.9023 15.5889 53.01 15.2917 52.9993C14.9944 52.9885 14.7136 52.8602 14.5109 52.6426L0.299231 37.3265C0.0972736 37.1072 -0.00999549 36.8171 0.000733911 36.5192C0.0114633 36.2213 0.139324 35.9397 0.356531 35.7356L2.80023 33.457C2.90806 33.3566 3.03461 33.2785 3.17266 33.227C3.3107 33.1756 3.45754 33.1518 3.60476 33.1572C3.75199 33.1625 3.89672 33.1968 4.03069 33.2581C4.16466 33.3193 4.28524 33.4064 4.38554 33.5143L18.5927 48.827ZM36.7266 20.0083C36.9286 20.2275 37.0359 20.5176 37.0251 20.8155C37.0144 21.1134 36.8865 21.395 36.6693 21.5992L21.3105 35.9468C21.0926 36.1492 20.8033 36.2569 20.506 36.2462C20.2088 36.2354 19.928 36.1071 19.7252 35.8895L16.0591 31.9335C15.8572 31.7143 15.7499 31.4242 15.7606 31.1263C15.7714 30.8284 15.8992 30.5467 16.1164 30.3426L31.4718 15.995C31.5796 15.8946 31.706 15.8165 31.844 15.7651C31.9819 15.7136 32.1287 15.6899 32.2758 15.6952C32.423 15.7005 32.5676 15.7348 32.7015 15.7961C32.8353 15.8574 32.9558 15.9444 33.056 16.0523L36.7266 20.0083ZM23.8183 43.943C24.2385 44.3958 24.2127 45.1115 23.761 45.5339L21.3173 47.8147C21.2095 47.9151 21.0829 47.9933 20.9449 48.0447C20.8068 48.0962 20.66 48.1199 20.5128 48.1146C20.3655 48.1093 20.2208 48.075 20.0868 48.0137C19.9529 47.9524 19.8323 47.8653 19.732 47.7574L5.52818 32.4413C5.32609 32.2222 5.21862 31.9322 5.22914 31.6343C5.23966 31.3364 5.36731 31.0547 5.58436 30.8504L8.02357 28.5708C8.24148 28.3683 8.53083 28.2606 8.82808 28.2714C9.12533 28.2821 9.40616 28.4104 9.60888 28.6281L23.8183 43.943ZM47.4834 20.5577C47.6852 20.7771 47.7923 21.0673 47.7814 21.3652C47.7704 21.6631 47.6423 21.9446 47.425 22.1486L44.9824 24.4294C44.7645 24.632 44.475 24.74 44.1776 24.7294C43.8801 24.7189 43.599 24.5908 43.396 24.3732L29.1899 9.06049C28.9876 8.84152 28.8799 8.55145 28.8904 8.25346C28.901 7.95548 29.0288 7.67372 29.2461 7.46956L31.6954 5.18316C31.8032 5.08281 31.9296 5.00469 32.0676 4.95325C32.2055 4.90182 32.3523 4.87808 32.4994 4.8834C32.6465 4.88872 32.7912 4.923 32.9251 4.98427C33.0589 5.04553 33.1794 5.13259 33.2796 5.24046L47.4834 20.5577ZM52.7011 15.6815C52.9029 15.9011 53.01 16.1913 52.9993 16.4893C52.9885 16.7873 52.8608 17.0691 52.6438 17.2736L50.2057 19.5532C50.0981 19.6536 49.9717 19.7319 49.8338 19.7834C49.6959 19.8349 49.5491 19.8588 49.402 19.8535C49.2549 19.8483 49.1102 19.8141 48.9763 19.753C48.8424 19.6918 48.7218 19.6048 48.6216 19.497L34.4178 4.17759C34.2159 3.95816 34.1086 3.66803 34.1191 3.37004C34.1296 3.07204 34.2571 2.79019 34.4739 2.58554L36.9143 0.301384C37.0218 0.200862 37.1481 0.122555 37.2859 0.0709567C37.4237 0.0193583 37.5704 -0.00451613 37.7175 0.000703253C37.8645 0.00592264 38.0092 0.0401331 38.143 0.101372C38.2768 0.16261 38.3972 0.249672 38.4973 0.357561L52.7011 15.6815Z" fill="white"/>
    </svg>,
    Location: <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.79824 1.88159C7.83673 1.88159 5.95555 2.65363 4.56855 4.02786C3.18155 5.4021 2.40234 7.26596 2.40234 9.20942C2.40234 10.9424 2.77399 12.0764 3.78907 13.3313L9.79824 20.2012L15.8074 13.3313C16.8225 12.0764 17.1941 10.9424 17.1941 9.20942C17.1941 7.26596 16.4149 5.4021 15.0279 4.02786C13.6409 2.65363 11.7598 1.88159 9.79824 1.88159V1.88159Z" stroke="#0D0C0C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>,
    Button2: <svg width="59" height="40" viewBox="0 0 59 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_881_2495)">
            <rect x="4" width="51" height="32" rx="8" fill="white" shape-rendering="crispEdges"/>
            <path d="M24.0832 6.25C21.0921 6.25 18.6665 8.65067 18.6665 11.6125C18.6665 14.0034 19.6144 19.6779 28.9452 25.4142C29.1123 25.5159 29.3042 25.5697 29.4998 25.5697C29.6955 25.5697 29.8874 25.5159 30.0545 25.4142C39.3853 19.6779 40.3332 14.0034 40.3332 11.6125C40.3332 8.65067 37.9076 6.25 34.9165 6.25C31.9254 6.25 29.4998 9.5 29.4998 9.5C29.4998 9.5 27.0743 6.25 24.0832 6.25Z" stroke="#36218B" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="4.5" y="0.5" width="50" height="31" rx="7.5" stroke="#341F87" shape-rendering="crispEdges"/>
        </g>
        <defs>
            <filter id="filter0_d_881_2495" x="0" y="0" width="59" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_881_2495"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_881_2495" result="shape"/>
            </filter>
        </defs>
    </svg>,
    Button1: <svg width="59" height="44" viewBox="0 0 59 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_881_2489)">
            <rect x="4" y="4" width="51" height="32" rx="8" fill="white"/>
            <rect x="4.5" y="4.5" width="50" height="31" rx="7.5" stroke="#36218B"/>
        </g>
        <path d="M29.4478 1.32532V15.0318M29.4478 1.32532L25.0415 5.89415M29.4478 1.32532L33.854 5.89415" stroke="#2D197D" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.1875 18.1948L18.8868 20.8149C19.0086 21.2711 19.2897 21.6761 19.6855 21.9655C20.0813 22.2549 20.5691 22.4121 21.0713 22.4122H37.8245C38.3267 22.4121 38.8145 22.2549 39.2103 21.9655C39.6061 21.6761 39.8873 21.2711 40.0091 20.8149L40.7083 18.1948" stroke="#2D197D" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
            <filter id="filter0_d_881_2489" x="0" y="4" width="59" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_881_2489"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_881_2489" result="shape"/>
            </filter>
        </defs>
    </svg>,
    Button3: <svg width="59" height="40" viewBox="0 0 59 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_881_2499)">
            <rect x="4" width="51" height="32" rx="8" fill="white" shape-rendering="crispEdges"/>
            <path d="M39.25 9.49996H19.75M39.25 9.49996L34.9167 13.8333M39.25 9.49996L34.9167 5.16663" stroke="#341F87" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.75 22.5H39.25M19.75 22.5L24.0833 26.8333M19.75 22.5L24.0833 18.1666" stroke="#341F87" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="4.5" y="0.5" width="50" height="31" rx="7.5" stroke="#341F87" shape-rendering="crispEdges"/>
        </g>
        <defs>
            <filter id="filter0_d_881_2499" x="0" y="0" width="59" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_881_2499"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_881_2499" result="shape"/>
            </filter>
        </defs>
    </svg>,
    Whatsapp:                  <svg width="76" height="62" viewBox="0 0 76 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_881_2911)">
            <rect x="4" width="67.8276" height="54.0001" rx="13" fill="#1FC87F" shape-rendering="crispEdges"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.1225 30.5731C45.6755 30.3496 43.484 29.2726 43.076 29.1226C42.668 28.9741 42.371 28.9006 42.0725 29.3476C41.7755 29.7916 40.922 30.7966 40.6625 31.0936C40.4015 31.3921 40.142 31.4281 39.6965 31.2061C39.251 30.9811 37.814 30.5116 36.1115 28.9936C34.787 27.8116 33.8915 26.3521 33.632 25.9051C33.3725 25.4596 33.6035 25.2181 33.827 24.9961C34.028 24.7966 34.2725 24.4756 34.496 24.2161C34.7195 23.9551 34.793 23.7691 34.9415 23.4706C35.0915 23.1736 35.0165 22.9141 34.904 22.6906C34.793 22.4671 33.902 20.2726 33.53 19.3801C33.1685 18.5116 32.801 18.6301 32.528 18.6151C32.267 18.6031 31.97 18.6001 31.673 18.6001C31.376 18.6001 30.893 18.7111 30.485 19.1581C30.0755 19.6036 28.925 20.6821 28.925 22.8766C28.925 25.0696 30.521 27.1891 30.7445 27.4876C30.968 27.7846 33.887 32.2876 38.3585 34.2181C39.4235 34.6771 40.253 34.9516 40.8995 35.1556C41.9675 35.4961 42.9395 35.4481 43.7075 35.3326C44.5625 35.2051 46.3445 34.2541 46.7165 33.2131C47.087 32.1721 47.087 31.2796 46.976 31.0936C46.865 30.9076 46.568 30.7966 46.121 30.5731H46.1225ZM37.9895 41.6776H37.9835C35.3276 41.678 32.7206 40.9641 30.4355 39.6106L29.8955 39.2896L24.2825 40.7626L25.781 35.2906L25.4285 34.7296C23.9437 32.3661 23.1579 29.6307 23.162 26.8396C23.165 18.6646 29.816 12.0136 37.9955 12.0136C41.9555 12.0136 45.6785 13.5586 48.4775 16.3606C49.8581 17.7354 50.9523 19.3704 51.6969 21.1709C52.4415 22.9714 52.8217 24.9017 52.8155 26.8501C52.8125 35.0251 46.1615 41.6776 37.9895 41.6776ZM50.6075 14.2321C48.9548 12.5684 46.9883 11.2494 44.8221 10.3513C42.6559 9.45316 40.333 8.99389 37.988 9.00006C28.157 9.00006 20.153 17.0026 20.15 26.8381C20.1485 29.9821 20.969 33.0511 22.5305 35.7556L20 45.0001L29.456 42.5191C32.0718 43.9442 35.0031 44.691 37.982 44.6911H37.9895C47.8205 44.6911 55.8245 36.6886 55.8275 26.8516C55.8348 24.5075 55.3771 22.1852 54.4811 20.0191C53.5851 17.853 52.2685 15.8861 50.6075 14.2321Z" fill="white"/>
        </g>
        <defs>
            <filter id="filter0_d_881_2911" x="0" y="0" width="75.8276" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_881_2911"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_881_2911" result="shape"/>
            </filter>
        </defs>
    </svg>,
    Circle: <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.166504 6.00008C0.166504 4.45299 0.781087 2.96926 1.87505 1.87529C2.96901 0.781331 4.45274 0.166748 5.99984 0.166748C7.54693 0.166748 9.03066 0.781331 10.1246 1.87529C11.2186 2.96926 11.8332 4.45299 11.8332 6.00008C11.8332 7.54718 11.2186 9.03091 10.1246 10.1249C9.03066 11.2188 7.54693 11.8334 5.99984 11.8334C4.45274 11.8334 2.96901 11.2188 1.87505 10.1249C0.781087 9.03091 0.166504 7.54718 0.166504 6.00008Z" fill="#341F87"/>
    </svg>








}

export default Icons
