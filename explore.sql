--
-- PostgreSQL database dump
--

-- Dumped from database version 13.11 (Debian 13.11-0+deb11u1)
-- Dumped by pg_dump version 13.11 (Debian 13.11-0+deb11u1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Category; Type: TABLE; Schema: public; Owner: bip
--

CREATE TABLE public."Category" (
    id text NOT NULL,
    title text,
    img text,
    des text,
    active boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Category" OWNER TO bip;

--
-- Name: Content; Type: TABLE; Schema: public; Owner: bip
--

CREATE TABLE public."Content" (
    id text NOT NULL,
    title text NOT NULL,
    des text NOT NULL,
    img text,
    active boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone
);


ALTER TABLE public."Content" OWNER TO bip;

--
-- Name: HeaderMenu; Type: TABLE; Schema: public; Owner: bip
--

CREATE TABLE public."HeaderMenu" (
    id text NOT NULL,
    name text,
    link text,
    active text,
    type text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."HeaderMenu" OWNER TO bip;

--
-- Name: Home; Type: TABLE; Schema: public; Owner: bip
--

CREATE TABLE public."Home" (
    id text NOT NULL,
    title text,
    img text
);


ALTER TABLE public."Home" OWNER TO bip;

--
-- Name: ImageGalery; Type: TABLE; Schema: public; Owner: bip
--

CREATE TABLE public."ImageGalery" (
    id text NOT NULL,
    name text,
    ext text,
    active boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."ImageGalery" OWNER TO bip;

--
-- Name: LandingPage; Type: TABLE; Schema: public; Owner: bip
--

CREATE TABLE public."LandingPage" (
    id text NOT NULL,
    title text,
    des text,
    footer text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "upadtedAt" timestamp(3) without time zone
);


ALTER TABLE public."LandingPage" OWNER TO bip;

--
-- Name: MediaSosial; Type: TABLE; Schema: public; Owner: bip
--

CREATE TABLE public."MediaSosial" (
    id text NOT NULL,
    title text,
    url text,
    img text,
    active boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."MediaSosial" OWNER TO bip;

--
-- Name: Page; Type: TABLE; Schema: public; Owner: bip
--

CREATE TABLE public."Page" (
    id text NOT NULL,
    title text,
    img text,
    des text,
    content text,
    active boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Page" OWNER TO bip;

--
-- Name: Post; Type: TABLE; Schema: public; Owner: bip
--

CREATE TABLE public."Post" (
    id text NOT NULL,
    title text,
    img text,
    des text NOT NULL,
    content text NOT NULL,
    active boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "categoryId" text
);


ALTER TABLE public."Post" OWNER TO bip;

--
-- Name: Slide; Type: TABLE; Schema: public; Owner: bip
--

CREATE TABLE public."Slide" (
    id text NOT NULL,
    img text,
    active boolean DEFAULT true NOT NULL
);


ALTER TABLE public."Slide" OWNER TO bip;

--
-- Name: User; Type: TABLE; Schema: public; Owner: bip
--

CREATE TABLE public."User" (
    id text NOT NULL,
    name text,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."User" OWNER TO bip;

--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: bip
--

COPY public."Category" (id, title, img, des, active, "createdAt", "updatedAt") FROM stdin;
clmpp8nji0005miq6zyypiupn	PENIDA ISLAND	clm7zb2n3000ymiiwemip4f72.jpg	BEST SELLER IN BALI	t	2023-09-19 02:31:45.966	2023-09-19 02:31:45.966
clmpof8g90002miq6wlxihccg	Nusa Lembongan	clmafjq2v001lmiiwv775aiwk.jpg	nusa 	f	2023-09-19 02:08:53.385	2023-09-19 14:33:34.668
clmpp3maz0003miq6eneo5nxp	RAFTING PACKAGE	clmafrtne001nmiiwoko5xe0z.jpeg	BEST SELLER RAFTING	f	2023-09-19 02:27:51.082	2023-09-19 14:35:24.563
clmpp4omx0004miq6tnujdzve	QUATH BIKE	clm79kih5000nmiiwcu3la9vc.jpeg	UBUD AREA\n- Pickup hotel\n- Visit ATV { Quath Bike } duration 1,5 hour.\n- Enjoy at Pool bar with rice terrace view\n\nALL INCLUDE :\n- Shuttle car return hotel.\n- ATV activities\n- Full access to pool bar\n- english driver\n- mineral water\n- locker and activities equipment\n- activities insurance\n\nPROMO PRICE : \n# SINGLE 250 CC ---> 800k / person\n# Tandem 250 CC ---> 1400k / 2 person\n	t	2023-09-19 02:28:40.761	2023-09-19 02:28:40.761
\.


--
-- Data for Name: Content; Type: TABLE DATA; Schema: public; Owner: bip
--

COPY public."Content" (id, title, des, img, active, "createdAt", "updatedAt") FROM stdin;
clm3ql9jg0006miqireoea99v	G\tPACKAGE	<p>- Pickup Hotel at 8am</p><p>- Visit Ayung River For Rafting Actifity</p><p>- Visit Gorila cave Quarth bike / ATV actifity</p><p>- Enjoy at sunset pool bar with rice field view and lunch</p><p>- Back to Hotel</p><p></p><p><strong><em>PRICE START FROM</em></strong> :</p><p>Adult : 1500k/pax&nbsp;</p><p>child : 700k/pax max : 4 years old</p><p>Included : car + petrol + engglish driver + itenerari package</p><p>Excluded : Parking fee&nbsp;</p><p>Max pax&nbsp; : 2 pax adult and 2 pax child { couple package }</p><p>Car type : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p></p><p>NOTED : package price is allready included with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p>	https://theworldtravelguy.com/wp-content/uploads/2021/05/DSCF9924-3_1200.jpg	f	2023-09-03 17:38:38.092	2023-09-04 12:47:55.155
clm6es199000dmiiwj72bi4qz	B    EAST BALI PACKAGE	<p><strong>KARANG ASAM TOUR</strong></p><p style="text-align: center"><strong>&nbsp;</strong></p><p><strong><em>ITENERARI</em></strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Pickup hotel at 8am</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Directly to white water rafting at Telaga waja river + ATV + lunch</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Besakih Mother Tample</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Kertha Gosa temple</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Dinner at Aero Park</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Back to hotel</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1800k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 500k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> +6281252272867</strong></p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm79kih5000nmiiwcu3la9vc.jpeg	t	2023-09-05 14:31:17.084	2023-09-08 06:31:22.709
clm3qfgf70003miqiqhrxkymg	D\tPACKAGE UBUD TOUR	<p><strong><em>ITENERARI</em></strong></p><p></p><p>- pickup hotel at 8am</p><p>- visit junggle swing ubud</p><p>- saraswati tample ubud</p><p>- tampak siring tample</p><p>- lunch at batur sari restourant kintamani</p><p>- visit penelokan park</p><p>- luwak coffee plantation</p><p>- back to hotel</p><p></p><p><strong><em>PRICE START FROM</em></strong> :</p><p>Adult : 1000k/pax&nbsp;</p><p>child : 400k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee&nbsp;</p><p>Max pax&nbsp; : 2 pax adult and 2 pax child { couple package }</p><p>Car type : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p></p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p><p></p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	https://cdn-2.tstatic.net/palu/foto/bank/images/gunung-batukaru-bali.jpg	t	2023-09-03 17:34:07.075	2023-09-08 06:50:30.704
clm3qk45q0005miqigt8krbut	F\tPACKAGE	<p>- pickup hotel at 8am</p><p>- visit kantolampo waterfall</p><p>- visit buterfly park</p><p>- lunch at teba carik restourant with rice field view</p><p>- visit elephant cave</p><p>- Visit rise field swing</p><p>- Visit tegal allang rise field</p><p>- dinner at bebek joni famous food with duck crispy at ubud</p><p>- back to hotel</p><p><strong><em>PRICE START FROM</em></strong> :</p><p>Adult : 1200k/pax&nbsp;</p><p>child : 400k/pax max : 4 years old</p><p>Included : car + petrol + engglish driver + itenerari package</p><p>Excluded : Parking fee&nbsp;</p><p>Max pax&nbsp; : 2 pax adult and 2 pax child { couple package }</p><p>Car type : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p></p><p>NOTED : package price is allready included with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p>	https://asset.kompas.com/crops/mfp0sY-Foa75RIcVY3C_m7OpHG0=/0x1308:2988x3300/750x500/data/photo/2022/02/17/620e3bb529f99.jpg	f	2023-09-03 17:37:44.461	2023-09-04 12:48:14.861
clm4vxegs0007miqiimijfjgo	UBUD ADVENTURE	<p></p>	20230822_183830.jpg	f	2023-09-04 12:55:48.604	2023-09-04 12:56:51.48
clm4ynyz70008miqiecjnyys3	BALI RAFTING AYUNG RIVER AND ATV QAUTH BIKE UBUD	<p style="text-align: center"><strong>EXOTIC TROPICAL BALI BOOKING</strong></p><p style="text-align: center"><strong>====================================</strong></p><p style="text-align: center"><strong>PRICE LIST</strong></p><p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ATV singel 850cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp. 1.200.000 / Pax</p><p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ATV Tandem 850cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 1.500.000 / Pax</p><p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ATV Singel 450cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp. 900.000 / Pax</p><p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ATV Tandem 450cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 1.200.000 / Pax</p><p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ATV Singel 250cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp. 850.000 / Pax</p><p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ATV Tandem 250cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 1.000.000 / Pax</p><p>&nbsp;</p><p>&nbsp;</p><p style="text-align: center">&nbsp;</p><p style="text-align: center"><strong>OPTION ACTIVITY</strong></p><hr><hr><p style="text-align: center"></p><p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Paint ball&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp. 885.000 / Pax</p><p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cycling&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp. 885.000 / Pax</p><p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; E-Bike&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 1.060.000 / Pax</p><p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Photo shoot singel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 765.000</p><p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Photo shoot Group&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp. 1.060.000</p><p>&nbsp;</p><p>&nbsp;</p><p><strong>&nbsp;</strong></p><p style="text-align: center"><strong>RAFTING PRICE LIST</strong></p><hr><hr><p style="text-align: center"></p><p>#Ayung River&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 1,5hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 750k / Pax&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UBUD</p><p>#Telaga Waja River &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1,5hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 750k / Pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KARANGASAM</p><p>#Melangit River &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,5hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 800k / Pax&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BANJARANGKAN</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : <a target="_blank" rel="noopener noreferrer nofollow" href="https://web.whatsapp.com/">+6287765344998</a>&nbsp; / &nbsp;<strong> </strong>+6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm79l1sx000omiiw352afl2t.jpeg	t	2023-09-04 14:12:27.459	2023-09-08 06:49:10.628
clm3qavms0000miqiphrbbl7r	A \tUBUD TOUR PACKAGE	<p><strong><em>ITENERARI</em></strong></p><p></p><ul><li><p>Pickup hotel at 8am</p></li><li><p>Watching barong dance traditional bali dancing</p></li><li><p>Visit batu bulan village {batik + silver + painting + wood carving}</p></li><li><p>Monkey forest the tample and kingdom of monkey at ubud</p></li><li><p>Visit rice field swing + lunch</p></li><li><p>Luwak coffee plantation</p></li><li><p>Back to hotel</p></li></ul><p></p><p><strong><em>PRICE START FROM</em></strong> :</p><p>Adult : 900k/pax&nbsp;</p><p>child : 400k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee&nbsp;</p><p>Max pax&nbsp;: 2 pax adult and 2 pax child { couple package }</p><p>Car type : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p></p><p>NOTED :</p><p>package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p><p></p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>Email : reservationexploretropica@gmail.com</p>	/img/clm7zihxa000zmiiw27gh1rsy.jpg	t	2023-09-03 17:30:33.506	2023-09-08 06:36:28.368
clm3qcm3l0001miqimf708tgq	B\tUBUD TOUR PACKAGE	<p><strong><em>ITENERARI</em></strong></p><p></p><p>- pickup time at hotel 8am</p><p>- visit monkey forrest kingdom of monkey ubud</p><p>- junggle swing in ubud with lunch</p><p>- tampak siring tample / tirtha empul tample</p><p>- luwak coffee plantation</p><p>- kantolampo waterfall</p><p>- back to hotel</p><p></p><p><strong><em>PRICE START FROM</em></strong> :</p><p>Adult : 1100k/pax&nbsp;</p><p>child : 500k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee&nbsp;</p><p>Max pax&nbsp; : 2 pax adult and 2 pax child { couple package }</p><p>Car type : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p></p><p>NOTED :</p><p>package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p><p></p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; +6281252272867</p><p>EMAIL : <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com">reservationexploretropica@gmail.com</a></p>	https://asset.kompas.com/crops/nMjevPnLxzC-C5XBDxaQ9kZRvwE=/0x0:1000x667/750x500/data/photo/2020/11/05/5fa3a4dbd12e7.jpg	t	2023-09-03 17:31:54.464	2023-09-08 06:51:35.551
clm6bp5n70003miiwn7ksouzj	A BEDUGUL/ULUNDANU PACKAGE TOUR	<p><strong><em>ITENERARI</em></strong></p><p></p><p>- Pickup Hotel at 8am</p><p>- Visit taman ayun Temple</p><p>- Visit Luwak coffee plantation</p><p>- Visit Ulundanu Temple</p><p>- Lunch at Ten Ten Bamboe Restourant</p><p>- Visit Puncak bagus Twin Lake {Tea Time }</p><p>- Optional { Free Schedule }</p><p>- Back to Hotel</p><p>&nbsp;</p><p><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 900k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 400k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p><p>&nbsp;</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm7z6qbn000smiiw52a3wlit.jpg	t	2023-09-05 13:05:03.932	2023-09-08 06:37:32.426
clm6bvfje0004miiwj743sf74	B       BEDUGUL/ULUNDANU TEMPLE	<p><strong><em>ITENERARI</em></strong></p><p></p><p>- Pickup Hotel at 8am</p><p>- Visit Junggle Gold Cocoa</p><p>- Visit Uludanu Temple</p><p>- Visit Handara Gate { Fake Heaven Gate }</p><p>- Lunch at Ten Ten Bamboe Restourant</p><p>- Visit Hidden Hill { Banyumala Waterfall }</p><p>- Back to Hotel</p><p>&nbsp;</p><p><strong><em>PRICE START FROM</em></strong> :</p><p></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1200k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 400k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp;  +6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm7z7rf8000tmiiw6bqh4aou.jpg	t	2023-09-05 13:09:56.714	2023-09-08 06:52:47.158
clm6ch37j0006miiwm5p8zzap	A      ULUWATU TOUR	<p><strong><em>ITENERARI</em></strong></p><p></p><p>- Pickup Hotel at 8.30am</p><p>- Visit WaterSport at Nusadua area + Lunch</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Banana Boat</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Donut Boat</p><p>- Visit GWK Culture Park</p><p>- Visit Luwak Coffee Plantation</p><p>- Visit Padang-Padang Beach</p><p>- Visit Uluwatu Tample</p><p>- Watching Kecak Dance at Uluwatu Temple { Optional }</p><p>- Dinner at Seafood Jimbaran Beach { Candle light dinner }</p><p>- Back to Hotel</p><p>&nbsp;</p><p><strong><em>PRICE START FROM</em></strong> :</p><p></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1400k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 500k/pax max : 4 years old</p><p>Include&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : car + petrol + english driver + itenerari package</p><p>Exclude &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; : Parking fee</p><p>Max pax &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {couple package }</p><p>Car type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour.</p><p>Your driver will drop you at padang-padang beach and going to uluwatu temple for buy kecak dance ticket, will back to pick you up at the beach and visit uluwatu tample.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>Email : <a target="_blank" rel="noopener noreferrer nofollow" href="https://exploretropica.com/reservationexploretropica@gmail.com">reservationexploretropica@gmail.com</a></p>	/img/clm7z9hnb000wmiiwgztgb84r.jpg	t	2023-09-05 13:26:47.149	2023-09-08 06:53:57.305
clm6enty3000cmiiwdk4t1z89	A       EAST BALI PACKAGE	<p><strong>KARANG ASAM TOUR</strong></p><p style="text-align: center"><strong>&nbsp;</strong></p><p><strong><em>ITENERARI</em></strong></p><p></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pickup hotel at 8am</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Direct white water rafting telaga waja river + lunch</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Visit Besakih mother temple</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Visit kertha gosa temple</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dinner at aero park</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Back to hotel</p><p>&nbsp;</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1300k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 400k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp;  +6281252272867</p><p>Email : <a target="_blank" rel="noopener noreferrer nofollow" href="https://exploretropica.com/reservationexploretropica@gmail.com">reservationexploretropica@gmail.com</a></p>	/img/clm9yu54u001jmiiw2b8oa4lv.jpg	t	2023-09-05 14:28:00.987	2023-09-08 06:40:13.06
clm6ehbxc000bmiiweuf6xgvw	EXOTIC TRAVELING MORNING SUN WITH RICE FIELD COMBINATION	<p style="text-align: center"><strong>&nbsp;EXOTIC TRAVELING MORNING SUN WITH RICE FIELD COMBINATION</strong></p><p style="text-align: center"><strong>&nbsp;</strong></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pickup hotel at 06am</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Direct to sunrice at Batu karu temple</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tracking rice field and natural hot spring at Jati luwih rice terrace</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lunch</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tea time at puncak bagus twin lake</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ulundanu tample</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Back to hotel</p><p>&nbsp;</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1200k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 400k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>Email : <a target="_blank" rel="noopener noreferrer nofollow" href="https://exploretropica.com/reservationexploretropica@gmail.com">reservationexploretropica@gmail.com</a></p>	/img/clm9ykymx001gmiiw54mgvwva.jpeg	t	2023-09-05 14:22:57.696	2023-09-08 06:40:56.904
clm6dbmwv0009miiwx2cc9njo	BEST SELLER PENIDA ISLAND TOUR PACKAGE	<p><strong>PENIDA ISLAND</strong></p><p>&nbsp;</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; West Trip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000k/person&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; East Trip&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1000k/person&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; West and East trip&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1300k/person&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Special Trip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1600k/person&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2Pax</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Combination Package&nbsp;&nbsp;&nbsp;&nbsp; 1500k/Person&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>&nbsp;</p><p>&nbsp;</p><p><strong>INCLUDED :</strong></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Open ticket boat to Penida</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lunch at local Restourant</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Car + Petrol + English Driver at Penida Island</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Retribution at Penida</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Goverment Tax</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mineral water</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Insurance Fast boat</p><p><strong>&nbsp;</strong></p><p><strong>EXCLUDED</strong></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Return transfer Hotel to harbour</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Parking fee at harbour</p><p></p><h1 style="text-align: center">&nbsp;<strong>WEST TRIP ITENERARI</strong></h1><p style="text-align: center"></p><p><strong>&nbsp;</strong></p><p><strong># KELINGKING BEACH</strong></p><p><strong># BROKEN BEACH</strong></p><p><strong># ANGEL BILABONG</strong></p><p><strong># PALUANG CLIFF</strong></p><p><strong># CRYSTAL BAY</strong></p><p><strong>&nbsp;</strong></p><h1 style="text-align: center"><strong>EAST TRIP ITENERARI</strong></h1><p><strong># ATUH BEACH</strong></p><p><strong># DIAMOND BEACH</strong></p><p><strong># NIRWANA CLIFF</strong></p><p><strong># THREE HOUSE</strong></p><p><strong>&nbsp;</strong></p><h1 style="text-align: center"><strong>SPECIAL TRIP ITENERARI</strong></h1><p><strong># WEST / EAST TRIP</strong></p><p><strong># SNORKELING AT PENIDA</strong></p><p style="text-align: center"><strong>SNOKELING SPOT :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></p><p style="text-align: center"><strong>#<em>MANTA BAY</em></strong></p><p style="text-align: center"><strong><em>#GAMAT BAY</em></strong></p><p style="text-align: center"><strong><em>#WALL POINT</em></strong></p><p style="text-align: center"><strong><em>#CRYSTAL BAY</em></strong></p><p style="text-align: center"></p><h1 style="text-align: center"><strong><em>COMBINATION TRIP ITENERARI</em></strong></h1><p><strong>- Diamond beach</strong></p><p><strong>- Three house</strong></p><p><strong>- Kelingking cliff</strong></p><p><strong>- Paluang cliff</strong>&nbsp;</p><p></p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm7zb2n3000ymiiwemip4f72.jpg	t	2023-09-05 13:50:32.364	2023-09-08 06:41:46.307
clm6dg9tg000amiiw3c2b5gpx	A   BEST SELLER PENIDA ISLAND TOUR PACKAGE	<p><strong>PENIDA ISLAND</strong></p><p>&nbsp;</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; West Trip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000k/person&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; East Trip&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1000k/person&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; West and East trip&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1300k/person&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Special Trip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1600k/person&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2Pax</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Combination Package&nbsp;&nbsp;&nbsp;&nbsp; 1500k/Person&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>&nbsp;</p><p>&nbsp;</p><p><strong>INCLUDED :</strong></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Open ticket boat to Penida</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lunch at local Restourant</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Car + Petrol + Engglish Driver at Penida Island</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Retribution at Penida</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Goverment Tax</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mineral water</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Insurance Fast boat</p><p><strong>&nbsp;</strong></p><p><strong>EXCLUDED</strong></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Return transfer Hotel to harbour</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Parking fee at harbour</p><p></p><h1 style="text-align: center"><strong>WEST TRIP ITENERARI</strong></h1><p></p><p><strong># KELINGKING BEACH</strong></p><p><strong># BROKEN BEACH</strong></p><p><strong># ANGEL BILABONG</strong></p><p><strong># PALUANG CLIFF</strong></p><p><strong># CRYSTAL BAY</strong></p><p></p><h1 style="text-align: center"><strong>EAST TRIP ITENERARI</strong></h1><p><strong>#ATUH BEACH</strong></p><p><strong># DIAMOND BEACH</strong></p><p><strong># NIRWANA CLIFF</strong></p><p><strong># THREE HOUSE</strong></p><p><strong>&nbsp;</strong></p><h1 style="text-align: center"><strong>SPECIAL TRIP ITENERARI</strong></h1><p><strong># WEST / EAST TRIP</strong></p><p><strong># SNORKELING AT PENIDA</strong></p><p style="text-align: center"><strong><em>SNOKELING SPOT</em> :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></p><p style="text-align: center"><strong>#<em>MANTA BAY</em></strong></p><p style="text-align: center"><strong><em>#GAMAT BAY</em></strong></p><p style="text-align: center"><strong><em>#WALL POINT</em></strong></p><p style="text-align: center"><strong><em>#CRYSTAL BAY</em></strong></p><p style="text-align: center"></p><h1 style="text-align: center"><strong><em>COMBINATION TRIP ITENERARI</em></strong></h1><p><strong>- Diamond beach</strong></p><p><strong>- Three house</strong></p><p><strong>- Kelingking cliff</strong></p><p><strong>- Paluang cliff</strong>&nbsp;</p><p></p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>Email :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm7zb2n3000ymiiwemip4f72.jpg	f	2023-09-05 13:54:08.691	2023-09-09 00:33:56.807
clm6fj06j000gmiiw53jk9vol	CLIMBING MOUNT BATUR	<p style="text-align: center"><strong>SPECIAL PACKAGE FOR CLIMB BATUR MOUNTAIN AND WATCHING EXOTIC MORNING SUN ON THE TOP OF MOUNTAIN.</strong></p><p>&nbsp;</p><p><strong><em>ITENERARI</em></strong></p><p></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Pickup hotel at 2am { early morning }</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Break fast at meeting point kintamani area { first }</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Start going to the mountain with instruktor</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Break fast at meeting point kintamani area { second }</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Back to hotel</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1000k/pax Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 450k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp;  +6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm9ya3ky001emiiw1ard236p.jpg	t	2023-09-05 14:52:15.403	2023-09-08 06:43:08.741
clm6g8oqm000jmiiwm6v6fn13	TULAMBEN DIVING PACKAGE	<p><strong>TULAMBEN DIVING PACKAGE</strong></p><p style="text-align: center"><strong>&nbsp;</strong></p><p><strong><em>ITENERARI</em></strong></p><p></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Pickup Hotel at 6am</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Tulamben for Diving</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Lempuyang temple</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Lunch</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Thirta Gangga Water Palace</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Dinner</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Back to Hotel</p><p>&nbsp;</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1800k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 600k/pax max : 4 years old</p><p>Included : car + petrol + engglish driver + itenerari package</p><p>Excluded : Parking fee</p><p>Max pax &nbsp;: 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready included with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>Email : <a target="_blank" rel="noopener noreferrer nofollow" href="https://exploretropica.com/reservationexploretropica@gmail.com">reservationexploretropica@gmail.com</a></p>	/img/clm9ynz6v001imiiwzuhdo22j.jpg	t	2023-09-05 15:12:13.629	2023-09-08 06:45:59.788
clm6gy1zs000mmiiwp0e9p5tg	EXOTIC TROPICAL ACTIVITY BALI BOOKING	<p><strong>EXOTIC TROPICAL BALI BOOKING</strong></p><p><strong>====================================</strong></p><p><strong>PRICE LIST</strong></p><p>#ATV singel 850cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 1.200.000 / Pax</p><p>#ATV Tandem 850cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 1.500.000 / Pax</p><p>#ATV Singel 450cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp. 900.000 / Pax</p><p>#ATV Tandem 450cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 1.200.000 / Pax</p><p>#ATV Singel 250cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp. 850.000 / Pax</p><p>#ATV Tandem 250cc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 1.000.000 / Pax</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><strong>OPTION ACTIVITY</strong></p><p>#Paint ball&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp. 885.000 / Pax</p><p>#cycling&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 885.000 / Pax</p><p>#E-Bike&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp. 1.060.000 / Pax</p><p>#Photo shoot singel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp. 765.000</p><p>#Photo shoot Group&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rp. 1.060.000</p><p>&nbsp;</p><p>&nbsp;</p><p><strong>RAFTING PRICE LIST</strong></p><p>#Ayung River&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1,5hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;750k / Pax&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UBUD</p><p>#Telaga Waja River &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1,5hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 750k / Pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; KARANGASAM</p><p>#Melangit River &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,5hr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 800k / Pax&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BANJARANGKAN</p><p>&nbsp;</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; / &nbsp; +6281252272867</p><p>Email : <a target="_blank" rel="noopener noreferrer nofollow" href="https://exploretropica.com/reservationexploretropica@gmail.com">reservationexploretropica@gmail.com</a></p>	/img/clm8sqva30017miiwltoysqzt.jpg	t	2023-09-05 15:31:57.193	2023-09-08 06:45:20.477
clm3qhwr50004miqi3tgpv23s	E\tBEST SELLER UBUD PACKAGE	<p><strong><em>ITENERARI</em></strong></p><p></p><p>- pickup hotel at 8am</p><p>- visit saraswati temple</p><p>- elephant cave&nbsp;</p><p>- tegal allang rice field</p><p>- lunch at batur sari restourant volcano mountain view</p><p>- luwak coffee plantation</p><p>- optional/free schedule</p><p></p><p><strong><em>PRICE START FROM</em></strong> :</p><p>Adult : 600k/pax&nbsp;</p><p>child : 200k/pax max : 4 years old</p><p>Included : car + petrol + engglish driver + itenerari package</p><p>Excluded : Parking fee&nbsp;</p><p>Max pax&nbsp; : 2 pax adult and 2 pax child { couple package }</p><p>Car type : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p></p><p>NOTED : package price is allready included with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p><p></p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp;  +6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm9z12ku001kmiiwe3eaynbw.jpg	t	2023-09-03 17:36:01.553	2023-09-08 06:46:39.525
clm6c5r4e0005miiwa6dzdd5d	C      BEDUGUL/ULUNDANU TOUR	<p><strong><em>ITENERARI</em></strong></p><p></p><p>- Visit Hotel at 8am</p><p>- Visit Taman Ayun Temple</p><p>- Visit Jatiluwih Original Rice field view</p><p>- Lunch at Ten Ten Bamboe Restourant</p><p>- Visit ulundanu temple</p><p>- Visit Twin Lake at Puncak Bagus { Tea Time }</p><p>- Back to Hotel</p><p>&nbsp;</p><p><strong><em>PRICE START FROM</em></strong> :</p><p></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 900k/pax Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 400k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm7z6qbn000smiiw52a3wlit.jpg	t	2023-09-05 13:17:58.286	2023-09-08 06:44:34.495
clm6ax8vx0001miiwqpdscqsh	F      UBUD TOUR PACKAGE	<p><strong><em>ITENERARI</em></strong></p><p></p><p>- pickup hotel at 8am</p><p>- visit kantolampo waterfall</p><p>- visit buterfly park</p><p>- lunch at teba carik restourant with rice field view</p><p>- visit elephant cave</p><p>- Visit rise field swing</p><p>- Visit tegal allang rise field</p><p>- dinner at bebek joni famous food with duck crispy at ubud</p><p>- back to hotel</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1200k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 400k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p><p>&nbsp;</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp;  +6281252272867</p><p>Email : <a target="_blank" rel="noopener noreferrer nofollow" href="reservationexploretropica@gmail.com">reservationexploretropica@gmail.com</a></p>	/img/clm7zihxa000zmiiw27gh1rsy.jpg	t	2023-09-05 12:43:21.77	2023-09-08 06:56:10.454
clm6bfaqm0002miiwk3afwmo3	ADVENTURE RAFTING AND ATV PACKAGE	<p>&nbsp;<strong>ITENERARI</strong></p><p>- Pickup Hotel at 8am</p><p>- Visit Ayung River For Rafting Actifity</p><p>- Visit Gorila cave Qauth bike / ATV actifity</p><p>- Enjoy at sunset pool bar with rice field view and lunch</p><p>- Back to Hotel</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1500k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 700k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm79kih5000nmiiwcu3la9vc.jpeg	t	2023-09-05 12:57:23.997	2023-09-08 06:57:09.171
clm9w73rf001amiiwqglij15p	ABOUT US	<h1 style="text-align: center"><strong>COMPANY PROFIL EXOTIC TROPIKAL BALI 2023</strong></h1><h1 style="text-align: center"><strong>BEST TRAVELING IN TROPIKAL ISLAND</strong></h1><p style="text-align: center"></p><p>        Exotic Tropical is a business engaged in the field of tours and travel, especially in the Denpasar Bali area and its surroundings, this business serves bookings for your vacation trips and activities both on water and land in the form of tour packages in Bali.</p><p>We also provide travel services near and far as well as special events such as weddings, meetings and other special events in Bali.</p><p></p><h1 style="text-align: center"><strong>VISION AND MISSION</strong></h1><p style="text-align: center"></p><p>Exotic Tropical Bali provides excellent service and wholeheartedly provides 5 star service in working in the Bali tourism sector in particular.</p><p>Exotic Tropical Bali offers tours that can give a perfect and meaningful impression with our interesting experiences from the tours that we present to you.</p><p>Make your holiday meaningful and memorable for you. Exotic Tropical Bali provides drivers who are truly experienced in their field, making it easier for you to communicate and plan something that meets your expectations.</p><p></p><h1 style="text-align: center"><strong>PRODUCT</strong></h1><p style="text-align: center"></p><p>In this product sector, we have several tour packages that we have designed according to your tourism needs in Bali. So that it can be understood and understood in each package. The price is quite attractive in its class.</p><p>And we always provide different packages than usual. And will always provide the best in service.</p><p>We also provide single packages along with ready-to-use vehicles to meet the needs of our customers.</p><p></p><p></p><h1 style="text-align: center"><strong>TESTIMONY</strong></h1><p>During our tour with Exotic Tropical Bali for several days, it was a very valuable experience and full of memories that are very difficult to forget. It seems like we still want to go on a tour if we still have a long time.</p><p>Very fun and friendly driver and very good service to customers.</p><p>During a few days in Bali with the Exotic Tropical Bali Team, we felt safe, fun and very memorable.</p><p style="text-align: center"></p><h1 style="text-align: center"><strong>BALI TROPICAL EXOTIC</strong></h1><h1 style="text-align: center"><strong>&nbsp;</strong></h1><h1 style="text-align: center"><strong>SERVE SINCERELY</strong></h1><p style="text-align: center"></p><h2><strong>CONTACT PERSON :</strong></h2><p><strong>RONALD :                                                                      CICI :</strong></p><p><strong>Whatsapp : +6287765344998                                        Whatsapp : +6281252272867</strong></p><p><strong>Email        :  </strong><a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"><strong>reservationexploretropica@gmail.com</strong></a><strong>              </strong></p>	/img/clm9w5aby0019miiwotoovptq.png	t	2023-09-08 01:02:12.171	2023-09-08 06:30:20.42
clm6ctzej0008miiw3ylgs3jn	WATCHING DOLPHINE AT LOVINA BAY	<p><strong><em>ITENERARI</em></strong></p><p></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pickup Hotel at 4.30am / 5.30am</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Directly to Lovina singaraja</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Drop off boat harbour</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Watching Dolphine at Lovina bay</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Snorkeling at Anturan Bay</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lunch</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Budha Temple</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Back to Hotel</p><p>&nbsp;</p><p><strong><em>PRICE START FROM</em></strong> :</p><p></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1100k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 500k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; {couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour.</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp;  +6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm7z8xhs000vmiiwzoukgj9m.jpg	t	2023-09-05 13:36:48.763	2023-09-08 06:58:09.381
clm6fr07s000hmiiw7abyu7u6	EXOTIC DINNER CRUISE PACKAGE	<h1 style="text-align: center"><strong>EXOTIK DINNER CRUISES</strong></h1><p style="text-align: center"><strong>&nbsp;</strong></p><p><strong><em>INCLUSIONS :</em></strong></p><p><strong><em>&nbsp;</em></strong></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pickup and drop off door to door service in air conditioned comfort around south bali area</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Welcome drink and canapes</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; International buffet dinner</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Live musical entertainment</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Live cabaret show</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p><p># pickup hotel at 4pm</p><p># Drop at cruises harbour</p><p># Pickup at 8pm</p><p># back to hotel</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1300k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 700k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; +6281338137061</p><p>EMAil : <a target="_blank" rel="noopener noreferrer nofollow" href="https://exploretropica.com/reservationexploretropica@gmail.com">reservationexploretropica@gmail.com</a></p>	/img/clm9xyve7001cmiiwvwhkqyej.png	f	2023-09-05 14:58:28.696	2023-09-08 02:27:10.457
clm3qe4px0002miqise1t6hgq	C\tUBUD ADVENTURE PACKAGE	<p><strong><em>ITENERARI</em></strong></p><p></p><p>- pickup time at hotel 8am</p><p>- visit RAFTING AT AYUNG RIVER</p><p>- Visit ATV {Qauth bike}</p><p>- enjoy at pool bar and lunch</p><p>- dinner at bebek joni { special famous food in ubud}</p><p>- back to hotel</p><p></p><p><strong><em>PRICE START FROM</em></strong>&nbsp; :</p><p>Adult : 1500k/pax&nbsp;</p><p>child : 750k/pax max : 7 years old</p><p>Included &nbsp; : car + petrol + english driver + itenerari package</p><p>Excluded &nbsp; : Parking fee&nbsp;</p><p>Max pax&nbsp; : 2 pax adult and 2 pax child { couple package }</p><p>Car type &nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>Atv cc : 250 cc</p><p>Boat capacity : 6 pax</p><p></p><p>NOTED : package price is allready included with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour</p><p>Max years old for rafting and atv qauth bike is 65 years old and min 5 years old for child.</p><p></p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> +6281252272867</strong></p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	https://www.gotravelly.com/blog/wp-content/uploads/2020/06/pemandian-air-panas-banjar-1200x796.jpg	t	2023-09-03 17:33:05.253	2023-09-08 06:30:53.796
clm4zlifx000amiqii1rp3vjl	EXOTIC MORNING SUN AT THE TOP OF MOUNTAIN / CLIMBING	<p style="text-align: center"><strong>MOUNTAIN CLIMBING</strong></p><p style="text-align: center"><strong>&nbsp;</strong></p><p style="text-align: center"><strong>SPECIAL PACKAGE FOR CLIMB BATUR MOUNTAIN AND WATCHING EXOTIC MORNING SUN ON THE TOP OF MOUNTAIN.</strong></p><p>&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Pickup hotel at 2am { early morning }</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Break fast at meeting point kintamani area { first }</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Start going to the mountain with instruktor</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Break fast at meeting point kintamani area { second }</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Back to hotel</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 700k/pax Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 450k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm9yl2rt001hmiiwb05j5qqv.jpeg	t	2023-09-04 14:38:32.333	2023-09-08 06:59:08.813
clm6cp31s0007miiw6mmtfyrb	B - ULUWATU TOUR	<p><strong><em>ITENERARI</em></strong></p><p></p><p>- Pickup Hotel at 8am</p><p>- Visit WaterSport at Nusadua area</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Banana Boat</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Donut Boat</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Lunch</p><p>- Visit Pandawa Beach { Vacation on the Beach }</p><p>- Visit Melasti Beach</p><p>- Visit Uluwatu Temple and Kecak Dance</p><p>- Dinner at Seafood Jimbaran Beach { Candle light Dinner }</p><p>- Back to Hotel</p><p>&nbsp;</p><p><strong><em>PRICE START FROM</em></strong> :</p><p></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1200k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 500k/pax max : 4 years old</p><p>Included : car + petrol + engglish driver + itenerari package</p><p>Excluded : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready included with itenerari and our driver will give you information for the trip with itenerari schedule in 10 until 12 hour.</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp;<strong> </strong>+6281252272867</p><p>Email : <a target="_blank" rel="noopener noreferrer nofollow" href="https://exploretropica.com/reservationexploretropica@gmail.com">reservationexploretropica@gmail.com</a></p>	/img/clm79r3jy000pmiiwiexe1cmx.jpeg	t	2023-09-05 13:33:00.187	2023-09-08 06:38:29.704
clm6g1a8j000imiiwsnwvub42	TULAMBEN / EAST BALI SNORKELING TOUR	<p><strong>EAST BALI SNORKELING TOUR</strong></p><p style="text-align: center"><strong>&nbsp;</strong></p><p><strong>ITENERARI</strong></p><p>&nbsp;</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pickup Hotel at 8am</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Directly to Snorkeling at Blue Lagoon+lunch</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Visit Tenganan Village</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Visit Virgin beach</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dinner at Candi Dasa</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Back to hotel</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1100k/pax Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 250k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>Email : <a target="_blank" rel="noopener noreferrer nofollow" href="https://exploretropica.com/reservationexploretropica@gmail.com">reservationexploretropica@gmail.com</a></p>	/img/clm8s78wc0012miiwqp2vx7db.jpg	t	2023-09-05 15:06:28.224	2023-09-08 06:42:25.46
clm6ggdpy000kmiiwlbuq2u32	EAST BALI TEMPLE TOUR	<p><strong>EAST BALI TOUR</strong></p><p style="text-align: center"><strong>&nbsp;</strong></p><p><strong><em>ITENERARI</em></strong></p><p></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Pickup Hotel at 8am</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Tirtha Gangga water palace</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Taman Ujung water palace</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Lunch</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Candi dasa Beach</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Goa Lawah</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Dinner</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Back to Hotel</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1000k/pax Min : 2 pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 400k/pax max : 4 years old</p><p>Included : car + petrol + engglish driver + itenerari package</p><p>Excluded : Parking fee</p><p>Max pax &nbsp;: 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready included with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>Email : <a target="_blank" rel="noopener noreferrer nofollow" href="https://exploretropica.com/reservationexploretropica@gmail.com">reservasiexploretropica@gmail.com</a></p>	/img/clm8s7nlf0015miiw6y67qeo0.jpg	t	2023-09-05 15:18:12.598	2023-09-08 06:47:23.812
clm4zb1zt0009miqi1a5673r9	BALI LUXURY DINNER 	<p></p><p style="text-align: center"><strong>EXOTIK DINNER AT CRUISES</strong></p><p style="text-align: center"><strong>&nbsp;</strong></p><p>&nbsp;</p><p><strong><em>INCLUSIONS :</em></strong></p><p><strong><em>&nbsp;</em></strong></p><p>-&nbsp;Pickup and drop off door to door service in air conditioned comfort around south bali area</p><p>-&nbsp;Welcome drink and canapes</p><p>- International buffet dinner</p><p>-&nbsp;Live musical entertainment</p><p>-&nbsp;Live cabaret show</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p><p># pickup hotel at 4pm</p><p># Drop at cruises harbour</p><p># Pickup at 8pm</p><p># back to hotel</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1300k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 700k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; <strong> </strong>+6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm9xyve7001cmiiwvwhkqyej.png	t	2023-09-04 14:30:24.455	2023-09-08 06:48:08.7
clm6f58ke000fmiiw88ovdr97	C    EAST BALI TOUR	<p><strong>KARANG ASAM TOUR</strong></p><p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></p><p><strong>ITENERARI EAST BALI TOUR</strong></p><p></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Pickup Hotel at 8am</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 30 minutes Elephant ride at Banjarangkan village + lunch</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit selat duda village</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Kertha Gosa temple</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Dinner at Aero park</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Back to Hotel</p><p>&nbsp;</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1900k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 500k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp;  +6281252272867</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm9yfsnt001fmiiw1ejf81ul.jpeg	t	2023-09-05 14:41:33.085	2023-09-08 06:48:46.08
clm6gnv4c000lmiiwsg660b9a	EAST BALI TEMPLE AND MOTHER TEMPLE	<p><strong>EAST BALI TOUR</strong></p><p></p><p><strong><em>ITENERARI</em></strong></p><p></p><p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>- Pickup Hotel at 8am</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Lempuyang Temple</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Tirta Gangga water palace</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Besakih Mother Temple</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Lunch</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit menanga Rice field</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Back to Hotel</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1200k/pax Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 400k/pax max : 4 years old</p><p>Included : car + petrol + engglish driver + itenerari package</p><p>Excluded : Parking fee</p><p>Max pax &nbsp;: 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready included with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;</p><p>&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; +6281252272867</p><p>Email : <a target="_blank" rel="noopener noreferrer nofollow" href="https://exploretropica.com/reservationexploretropica@gmail.com">reservationexploretropica@gmail.com</a></p>	/img/clm7zihxa000zmiiw27gh1rsy.jpg	t	2023-09-05 15:24:01.74	2023-09-17 02:31:09.805
clm6ey8gn000emiiwhalkro4e	C    EAST BALI PACKAGE	<p><strong>KARANG ASAM TOUR</strong></p><p style="text-align: center"><strong>&nbsp;</strong></p><p><strong><em>ITENERARI RAFTING AND ATV AT MELANGIT RIVER BANJARANGKAN</em></strong></p><p></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Directly to rafting at Melangit river + lunch + ATV {Quath bike}</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit kertha Gosa temple</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visit Besakih Mother Temple</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Dinner at Aero park</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Back to hotel</p><p>&nbsp;</p><p>&nbsp;</p><p style="text-align: center"><strong><em>PRICE START FROM</em></strong> :</p><p style="text-align: center"></p><p>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1800k/pax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min : 2 Pax</p><p>child&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 500k/pax max : 4 years old</p><p>Include : car + petrol + english driver + itenerari package</p><p>Exclude : Parking fee</p><p>Max pax &nbsp; : 2 pax adult and 2 pax child&nbsp;&nbsp;&nbsp; { couple package }</p><p>Car type&nbsp; : AVANZA-XENIA-SIGRA-APV-CALYA { 6 seat and 4 seat }</p><p>&nbsp;</p><p>NOTED : package price is allready include with itenerari and our driver will give you information for the trip with itenerari schedule in 12 until 14 hour.</p><p>&nbsp;&nbsp;</p><p>MORE INFORMATION</p><p>Whatsapp : +6287765344998&nbsp; /&nbsp; +6281338137061</p><p>EMAIL :<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:reservationexploretropica@gmail.com"> reservationexploretropica@gmail.com</a></p>	/img/clm79kih5000nmiiwcu3la9vc.jpeg	t	2023-09-05 14:36:06.359	2023-09-17 02:56:58.289
\.


--
-- Data for Name: HeaderMenu; Type: TABLE DATA; Schema: public; Owner: bip
--

COPY public."HeaderMenu" (id, name, link, active, type, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Home; Type: TABLE DATA; Schema: public; Owner: bip
--

COPY public."Home" (id, title, img) FROM stdin;
1	EXPLORE TROPICA	clm9w5aby0019miiwotoovptq.png
\.


--
-- Data for Name: ImageGalery; Type: TABLE DATA; Schema: public; Owner: bip
--

COPY public."ImageGalery" (id, name, ext, active, "createdAt", "updatedAt") FROM stdin;
clm509qcr0000migc34unqbi9	icon.png	png	t	2023-09-04 14:57:22.345	2023-09-04 14:57:22.345
clm550h570000miiww9ik2tlo	images.jpg	jpg	t	2023-09-04 17:10:08.585	2023-09-04 17:10:08.585
clm50cknf0000mikcdedfl2gu	ico.png	png	f	2023-09-04 14:59:34.922	2023-09-05 06:26:49.064
clm54mz7o0000mi5mw7x0ojeh	default.png	png	f	2023-09-04 16:59:38.818	2023-09-05 06:26:49.241
clm79kih5000nmiiwcu3la9vc	WhatsApp Image 2023-09-05 at 21.51.39.jpeg	jpeg	t	2023-09-06 04:53:14.23	2023-09-06 04:53:14.23
clm79l1sx000omiiw352afl2t	WhatsApp Image 2023-09-05 at 21.51.37.jpeg	jpeg	t	2023-09-06 04:53:39.296	2023-09-06 04:53:39.296
clm79r3jy000pmiiwiexe1cmx	WhatsApp Image 2023-09-05 at 21.56.54.jpeg	jpeg	t	2023-09-06 04:58:21.501	2023-09-06 04:58:21.501
clm79yclj000qmiiwlxkc7gus	WhatsApp Image 2023-09-05 at 22.00.42.jpeg	jpeg	t	2023-09-06 05:03:59.815	2023-09-06 05:03:59.815
clm79z3go000rmiiw22snd6wp	WhatsApp Image 2023-09-05 at 22.02.13.jpeg	jpeg	t	2023-09-06 05:04:34.632	2023-09-06 05:04:34.632
clm7z6qbn000smiiw52a3wlit	IMG-20230906-WA0016.jpg	jpg	t	2023-09-06 16:50:21.251	2023-09-06 16:50:21.251
clm7z7rf8000tmiiw6bqh4aou	IMG-20230906-WA0017.jpg	jpg	t	2023-09-06 16:51:09.332	2023-09-06 16:51:09.332
clm7z8be4000umiiwo695ohqh	IMG-20230906-WA0018.jpg	jpg	t	2023-09-06 16:51:35.212	2023-09-06 16:51:35.212
clm7z8xhs000vmiiwzoukgj9m	IMG-20230906-WA0019.jpg	jpg	t	2023-09-06 16:52:03.856	2023-09-06 16:52:03.856
clm7z9hnb000wmiiwgztgb84r	IMG-20230906-WA0020.jpg	jpg	t	2023-09-06 16:52:29.975	2023-09-06 16:52:29.975
clm7za2v2000xmiiwfjwohjg3	IMG-20230906-WA0021.jpg	jpg	t	2023-09-06 16:52:57.47	2023-09-06 16:52:57.47
clm7zb2n3000ymiiwemip4f72	IMG-20230906-WA0022.jpg	jpg	t	2023-09-06 16:53:43.838	2023-09-06 16:53:43.838
clm7zihxa000zmiiw27gh1rsy	IMG-20230906-WA0023.jpg	jpg	t	2023-09-06 16:59:30.237	2023-09-06 16:59:30.237
clm50cmnx0001mikcwkhlk01q	icon.png	png	f	2023-09-04 14:59:37.533	2023-09-06 17:06:22.638
clm8s78wc0012miiwqp2vx7db	IMG-20230907-WA0001.jpg	jpg	t	2023-09-07 06:22:34.189	2023-09-07 06:22:34.189
clm8s7ec90013miiwlt4d3ru3	IMG-20230907-WA0010.jpg	jpg	t	2023-09-07 06:22:41.242	2023-09-07 06:22:41.242
clm8s7j220014miiwdc67wnks	IMG-20230907-WA0011.jpg	jpg	t	2023-09-07 06:22:47.354	2023-09-07 06:22:47.354
clm8s7nlf0015miiw6y67qeo0	IMG-20230907-WA0009.jpg	jpg	t	2023-09-07 06:22:53.236	2023-09-07 06:22:53.236
clm8s7t3k0016miiwps04tdw3	IMG-20230907-WA0007.jpg	jpg	t	2023-09-07 06:23:00.368	2023-09-07 06:23:00.368
clm8sqva30017miiwltoysqzt	IMG-20230907-WA0017.jpg	jpg	t	2023-09-07 06:37:49.598	2023-09-07 06:37:49.598
clm8ss7wv0018miiwmkt6gxff	IMG-20230907-WA0018.jpg	jpg	t	2023-09-07 06:38:52.687	2023-09-07 06:38:52.687
clm9w5aby0019miiwotoovptq	Adobe_Express_20230908_0730110_1.png	png	t	2023-09-08 01:00:47.373	2023-09-08 01:00:47.373
clm9xp621001bmiiwv49e6y9s	dinner-71404_640.jpg	jpg	t	2023-09-08 01:44:14.569	2023-09-08 01:44:14.569
clm9xyve7001cmiiwvwhkqyej	Adobe_Express_20230908_0950590_1.png	png	t	2023-09-08 01:51:47.312	2023-09-08 01:51:47.312
clm9y3o0g001dmiiwact396ln	pexels-photo-955244.jpeg	jpeg	t	2023-09-08 01:55:31.025	2023-09-08 01:55:31.025
clm9ya3ky001emiiw1ard236p	istockphoto-1130876688-612x612.jpg	jpg	t	2023-09-08 02:00:31.138	2023-09-08 02:00:31.138
clm9yfsnt001fmiiw1ejf81ul	photo-1544211412-2a32426e7fd5.jpeg	jpeg	t	2023-09-08 02:04:56.921	2023-09-08 02:04:56.921
clm9ykymx001gmiiw54mgvwva	photo-1484766280341-87861644c80d.jpeg	jpeg	t	2023-09-08 02:08:57.945	2023-09-08 02:08:57.945
clm9yl2rt001hmiiwb05j5qqv	photo-1470252649378-9c29740c9fa8.jpeg	jpeg	t	2023-09-08 02:09:03.305	2023-09-08 02:09:03.305
clm9ynz6v001imiiwzuhdo22j	istockphoto-1137488655-612x612.jpg	jpg	t	2023-09-08 02:11:18.632	2023-09-08 02:11:18.632
clm9yu54u001jmiiw2b8oa4lv	istockphoto-1311734294-612x612.jpg	jpg	t	2023-09-08 02:16:06.271	2023-09-08 02:16:06.271
clm9z12ku001kmiiwe3eaynbw	istockphoto-669607438-612x612.jpg	jpg	t	2023-09-08 02:21:29.551	2023-09-08 02:21:29.551
clmafjq2v001lmiiwv775aiwk	jet sky.jpg	jpg	t	2023-09-08 10:03:53.671	2023-09-08 10:03:53.671
clmafkcv8001mmiiwdd5x27k2	37.jpg	jpg	t	2023-09-08 10:04:23.204	2023-09-08 10:04:23.204
clmafrtne001nmiiwoko5xe0z	istockphoto-981626010-612x612.jpeg	jpeg	t	2023-09-08 10:10:11.546	2023-09-08 10:10:11.546
clmg8ecww0000mizpoptdhsrf	images.jpeg	jpeg	t	2023-09-12 11:30:23.072	2023-09-12 11:30:23.072
clm804iq70010miiwa6ds5ngd	IMG-20230907-WA0000.jpg	jpg	f	2023-09-06 17:16:37.711	2023-09-13 16:36:17.727
clm8s64ab0011miiwmzcgc8vc	IMG-20230907-WA0006.jpg	jpg	f	2023-09-07 06:21:41.555	2023-09-13 16:36:22.682
\.


--
-- Data for Name: LandingPage; Type: TABLE DATA; Schema: public; Owner: bip
--

COPY public."LandingPage" (id, title, des, footer, "createdAt", "upadtedAt") FROM stdin;
1	EXPLORE TROPICA TOUR AND TRAVEL	<p><span style="font-size: 30px">EXPLORE TROPICA</span></p><h3>THE BEST EXPLORE IN TROPICA TRIP</h3><p>Exploring Tropica: Your Gateway to a Tropical Wonderland</p><p></p><pre><code class="language-typescriptreact"></code></pre>	\N	2023-09-10 09:59:31.227	2023-09-12 11:11:00.867
\.


--
-- Data for Name: MediaSosial; Type: TABLE DATA; Schema: public; Owner: bip
--

COPY public."MediaSosial" (id, title, url, img, active, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Page; Type: TABLE DATA; Schema: public; Owner: bip
--

COPY public."Page" (id, title, img, des, content, active, "createdAt", "updatedAt") FROM stdin;
clmpoe9ct0001miq6trhr3513	home	clm550h570000miiww9ik2tlo.jpg	ini adalah home	<p>Contact: </p><p></p><p>Description: </p>	t	2023-09-19 02:08:07.9	2023-09-19 02:08:07.9
\.


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: bip
--

COPY public."Post" (id, title, img, des, content, active, "createdAt", "updatedAt", "categoryId") FROM stdin;
\.


--
-- Data for Name: Slide; Type: TABLE DATA; Schema: public; Owner: bip
--

COPY public."Slide" (id, img, active) FROM stdin;
clmnjk9390000mipdawst5vez	clm9ynz6v001imiiwzuhdo22j.jpg	t
clmnjkagg0001mipdd6z4ilfw	clm9yl2rt001hmiiwb05j5qqv.jpeg	t
clmnjkccy0002mipdw7dh3vn5	clm9xp621001bmiiwv49e6y9s.jpg	t
clmnjkdva0003mipdepkmlh1w	clm8ss7wv0018miiwmkt6gxff.jpg	t
clmnjkg370004mipdaytmhbfv	clm9z12ku001kmiiwe3eaynbw.jpg	t
clmnjkk380005mipd2yxafq3a	clm8s7nlf0015miiw6y67qeo0.jpg	t
clmnjkm6r0006mipdsb2rx2vl	clm8s7j220014miiwdc67wnks.jpg	t
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: bip
--

COPY public."User" (id, name, email, password, "createdAt", "updatedAt") FROM stdin;
dsfvfafdefsdfdafvfd	cici	cici@gmail.com		2023-09-03 17:28:40.99	2023-09-03 17:28:03.406
clmpod21r0000miq65khixs5f	cici	cici2@gmail.com	cici_123	2023-09-19 02:07:11.773	2023-09-19 02:07:11.773
\.


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: Content Content_pkey; Type: CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."Content"
    ADD CONSTRAINT "Content_pkey" PRIMARY KEY (id);


--
-- Name: HeaderMenu HeaderMenu_pkey; Type: CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."HeaderMenu"
    ADD CONSTRAINT "HeaderMenu_pkey" PRIMARY KEY (id);


--
-- Name: Home Home_pkey; Type: CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."Home"
    ADD CONSTRAINT "Home_pkey" PRIMARY KEY (id);


--
-- Name: ImageGalery ImageGalery_pkey; Type: CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."ImageGalery"
    ADD CONSTRAINT "ImageGalery_pkey" PRIMARY KEY (id);


--
-- Name: LandingPage LandingPage_pkey; Type: CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."LandingPage"
    ADD CONSTRAINT "LandingPage_pkey" PRIMARY KEY (id);


--
-- Name: MediaSosial MediaSosial_pkey; Type: CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."MediaSosial"
    ADD CONSTRAINT "MediaSosial_pkey" PRIMARY KEY (id);


--
-- Name: Page Page_pkey; Type: CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."Page"
    ADD CONSTRAINT "Page_pkey" PRIMARY KEY (id);


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: Slide Slide_pkey; Type: CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."Slide"
    ADD CONSTRAINT "Slide_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: bip
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: Post Post_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bip
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

