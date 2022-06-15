$(document).ready(function(){
// 헤더 시작
    // 초기 스크롤 위치에 따른 클래스 부여
    if($(window).scrollTop() == 0) {
        $(".ps-top").addClass("top")
        $(".ps-top").removeClass("down")
    } else {
        $(".ps-top").removeClass("top")
    }

    // 스크롤 최상단 위치에 따른 클래스 부여
    $(window).scroll(function(){
        if($(window).scrollTop()) {
            $(".ps-top").removeClass("top")
        } else {
            $(".ps-top").addClass("top")
            $(".ps-top").removeClass("down")
        }
    })

    // 스크롤 내림 올림에 따른 클래스 부여
    $("html").on('mousewheel',function(e){ 
        var wheel = e.originalEvent.wheelDelta; 

        if(wheel > 0){ 
            //스크롤 올릴때
            $(".ps-top").removeClass("down")
        } else { 
            //스크롤  내릴때
            $(".ps-top").addClass("down")
        } 
    })

    // 메뉴 슬라이드
    $(".ps-top > .top-wrap > .menu > .gnb").mouseover(function(){
        $(this).children(".downMenu-wrap").stop().slideDown(220)
    })
    $(".ps-top > .top-wrap > .menu > .gnb").mouseleave(function(){
        $(this).children(".downMenu-wrap").stop().slideUp(220)
    })
// 헤더 끝

// 메인 비주얼 시작
    // 슬라이드 초기화
        // 페이지 초기 넘버 설정
        // 페이지 초기 트랙 설정
        // 첫화면 비디오 대기 시간 설정
	$('.mainVisual > .visual-wrap > .slides > .slide-page').on('init', function(event, slick){
        $(".mainVisual > .visual-wrap > .slides > .slide-num > .page-num").text("01")
		$(".mainVisual > .visual-wrap > .slides > .slide-num > .page-total").text("0" + slick.slideCount)

        $(".mainVisual > .visual-wrap > .slides > .slide-num > .page-track > .track").css({
            "width" : (100 / slick.slideCount) + "%"
        })

        setTimeout(function() {
            $('.mainVisual > .visual-wrap > .slides > .slide-page').slick("slickPlay")
        }, 52600)
	})

    // 슬라이더 기능
    $(".mainVisual > .visual-wrap > .slides > .slide-page").slick({
		autoplay: false,
		autoplaySpeed: 5000,
		arrows: false,
        pauseOnHover: false,
	})

    // 넘어가기 전
        // 페이지 넘버 관련
        // 페이지 트랙 관련
	$('.mainVisual > .visual-wrap > .slides > .slide-page').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".mainVisual > .visual-wrap > .slides > .slide-num > .page-num").text("0" + (nextSlide+1))

        $(".mainVisual > .visual-wrap > .slides > .slide-num > .page-track > .track").css({
            "width" : (100 / slick.slideCount) * (nextSlide+1) + "%"
        })
	})


    // 넘어간 후
        // 비디오 체크
    $('.mainVisual > .visual-wrap > .slides > .slide-page').on('afterChange', function(event, slick, currentSlide){
		let chk_video = slick.$slides[currentSlide].dataset.slideType

        if(chk_video == "video") {
            $('#ps-video')[0].currentTime = 0;
            $('.mainVisual > .visual-wrap > .slides > .slide-page').slick("slickPause")
            setTimeout(function() {
                $('.mainVisual > .visual-wrap > .slides > .slide-page').slick("slickPlay")
            }, 52600)
        }
	})

    // 슬라이드 이전/다음 버튼
    // 만약에 슬라이드가 멈춰있다면 버튼을 누를 경우 재생
	$(".mainVisual > .visual-wrap > .slides > .slide-btn > .prev").click(function(){
		$(".mainVisual > .visual-wrap > .slides > .slide-page").slick("slickPrev")

        if($('.mainVisual > .visual-wrap > .slides > .slide-page').slick("getSlick").paused) {
            $('.mainVisual > .visual-wrap > .slides > .slide-page').slick("slickPlay")
        }
	})
	$(".mainVisual > .visual-wrap > .slides > .slide-btn > .next").click(function(){
		$(".mainVisual > .visual-wrap > .slides > .slide-page").slick("slickNext")

        if($('.mainVisual > .visual-wrap > .slides > .slide-page').slick("getSlick").paused) {
            $('.mainVisual > .visual-wrap > .slides > .slide-page').slick("slickPlay")
        }
	})
// 메인 비주얼 끝

// 상품 소개 시작
    // 슬라이드 초기화
        // 초기 페이지 버튼에 액티브 부여
    $('.prdIntro > .intro-wrap > .slides > .slide-page').on('init', function(event, slick){
        $(".prdIntro > .intro-wrap > .slides > .slide-num > .btn").eq(0).addClass("active")
    })

    // 슬라이더 기능
    $(".prdIntro > .intro-wrap > .slides > .slide-page").slick({
		autoplay: false,
		arrows: false,
        speed: 300,
	})

    // 슬라이드 이전/다음 버튼
    $(".prdIntro > .intro-wrap > .slides > .slide-page .box > a > .img-box > .slide-btn > .prev").click(function(){
		$(".prdIntro > .intro-wrap > .slides > .slide-page").slick("slickPrev")
	})
	$(".prdIntro > .intro-wrap > .slides > .slide-page .box > a > .img-box > .slide-btn > .next").click(function(){
		$(".prdIntro > .intro-wrap > .slides > .slide-page").slick("slickNext")
	})

    // 넘어가기 전
        // 슬라이드 넘길 경우 클래스 부여 및 제거
	$('.prdIntro > .intro-wrap > .slides > .slide-page').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".prdIntro > .intro-wrap > .slides > .slide-num > .btn").removeClass("active")
        $(".prdIntro > .intro-wrap > .slides > .slide-num > .btn").eq(nextSlide).addClass("active")
	})

    // 페이지 넘버 클릭 시 이동
    $(".prdIntro > .intro-wrap > .slides > .slide-num > .btn").click(function(){
        let btn_idx = $(this).index()

        $(".prdIntro > .intro-wrap > .slides > .slide-page").slick("slickGoTo", btn_idx)
    })
// 상품 소개 끝

// 상품 아이템 슬라이드 시작
    // 초기화
    $(".prdItem > .item-wrap > .item-list > div").eq(0).show()

    // 슬라이드 설정
        // each를 통해 해당 선택자를 가져온 후 해당하는 인덱스에 맞춰 슬라이드 부여
    $(".item-list > div").each(function(){
		var slider = new Swiper(".swiperNo"+$(this).index()+"> .swiper", {
            slidesPerView: "auto",
            slidesPerGroup: 4,
            spaceBetween: 20,
            freeMode: true,
            observer: true,
            observeParents: true,
    
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
                snapOnRelease: false
            },
        })
	})

    // 탭 메뉴를 클릭하면
    $(".prdItem > .item-wrap > .tab-menu > a").click(function(){
        let menu_idx = $(this).index()

        $(".prdItem > .item-wrap > .tab-menu > a").removeClass("on")
        $(this).addClass("on")

        $(".prdItem > .item-wrap > .item-list > div").removeClass("on").hide()
        $(".prdItem > .item-wrap > .item-list > div").eq(menu_idx).show()
        setTimeout(function () {
            $(".prdItem > .item-wrap > .item-list > div").eq(menu_idx).addClass("on")
          }, 100);
    })
// 상품 아이템 슬라이드 끝

// 스크롤 매직
    // 컨트롤러 생성
    var controller = new ScrollMagic.Controller();

    // 씬 1 생성
	let scene01 = new ScrollMagic.Scene({
		triggerElement: ".mainBanner", // 스타트 지점을 생성
		offset: 0 , // 스타트 지점을 이동
		triggerHook: 1 , // 트리거 위치 지정
		duration: 0, // 애니메이션이 작동되는 길이 생성 안쓰면 애니메이션이 시간초대로 움직임
	});

	scene01.setClassToggle(".mainBanner > .banner-wrap > a", "as-hi"); // 클래스 추가하기
	scene01.addTo(controller); // 컨트롤러 등록

    // 씬 2 생성
	let scene02 = new ScrollMagic.Scene({
		triggerElement: ".prdItem", // 스타트 지점을 생성
		offset: 150 , // 스타트 지점을 이동
		triggerHook: 1 , // 트리거 위치 지정
		duration: 0, // 애니메이션이 작동되는 길이 생성 안쓰면 애니메이션이 시간초대로 움직임
	});

	scene02.setClassToggle(".prdItem > .item-wrap > .item-list > div", "on"); // 클래스 추가하기
	scene02.addTo(controller); // 컨트롤러 등록

    // 씬 3 생성
	let scene03 = new ScrollMagic.Scene({
		triggerElement: ".prdBanner01", // 스타트 지점을 생성
		offset: 930 , // 스타트 지점을 이동
		triggerHook: 1 , // 트리거 위치 지정
		duration: 0, // 애니메이션이 작동되는 길이 생성 안쓰면 애니메이션이 시간초대로 움직임
	});

	scene03.setClassToggle(".prdBanner01 > .desc > .prd-list > li > a", "as-hi"); // 클래스 추가하기
	scene03.addTo(controller); // 컨트롤러 등록
// 스크롤 매직 끝

// 탑 버튼
    // 위치에 따른 탑 버튼 숨김 또는 등장
    $(window).scroll(function(){
        const wH = $(window).height();

        if($(window).scrollTop() - wH > 0) {
            $(".top-btn").fadeIn()
        } else {
            $(".top-btn").fadeOut()
        }
    })

    // 탑 버튼 클릭 시
    $(".top-btn").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 500)

        $(".ps-top").removeClass("down")
        $(".ps-top").addClass("top")
    })

// 팝업창 관련
    var my_pop_up_class_name = ".pop-up" ;  // 내가 만든 팝업의 이름 쓰기
    var close_btn_class_name = ".close" ;  // 내가 만든 팝업 닫기버튼 이름 쓰기
    var expire_day_setting_val = 1 ;   // 몇일에 없어져야 하는지 쓰기 ex 하루뒤 1 , 이틀뒤 2

    function set_storege( key , val , set_expire_day ){   
    var date = new Date;
    var expire_day = date.getTime() + (set_expire_day * 24 * 60 * 60 * 1000);
    var key_val = JSON.stringify( {"val" : val , "set_expire_day" :  expire_day ,}) 
    var test = JSON.parse(key_val);
    localStorage.setItem(key, key_val);
    }

    function check_storege(key){
    var key_storage = localStorage.getItem(key);
    var key_storage_json = JSON.parse(key_storage);
    var storage_expire ;
    var date = new Date;
    var now_day = date.getTime();
    
    if(localStorage.getItem(key) !== null){
        storage_expire = key_storage_json.set_expire_day;
    }
    
    if(storage_expire < now_day){
        localStorage.removeItem(key);
    }
    
    if(localStorage.getItem(key) !== null){
        storage_expire = key_storage_json.set_expire_day;
        $(my_pop_up_class_name).hide();
        // 내 팝업 클래스 안 보이게 하기
    } else{
        $(my_pop_up_class_name).show(); 
        // 내 팝업 클래스 보이게 하기
    }  
    }

    check_storege(my_pop_up_class_name);

    // 닫기 버튼을 누르면...
    $(my_pop_up_class_name).find(close_btn_class_name).click(function(){
        $(my_pop_up_class_name).hide();

        let $today__checked = $(my_pop_up_class_name).find("input[type='checkbox']").prop("checked");

        if($today__checked){
            set_storege(my_pop_up_class_name, my_pop_up_class_name, expire_day_setting_val);
        }
        
    })

// 로그인 버튼 클릭
    $(".ps-top > .top-wrap > .icon > .login").click(function(){
        $(".modal-wrap").addClass("on")
    })

    $(".modal-wrap > .modal > .close-btn").click(function(){
        $(".modal-wrap").removeClass("on")
    })
    
})