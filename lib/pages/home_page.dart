import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
// for web
import 'dart:html' as html;

// inside
import 'package:portoweb/utilities/constants.dart';
import 'package:portoweb/utilities/enum.dart';
import 'package:portoweb/utilities/helper.dart';

class HomePage extends StatefulWidget {
  static const routedName = '/';

  const HomePage({super.key});
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  bool isSwitched = false;

  void callback() {
    setState(() {
      isSwitched = !isSwitched;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: ListView(
          children: const [
            IntroductionSections(),
            PortofolioSection(),
          ],
        ),
        bottomNavigationBar: BottomAppBar(
          child: Container(
            decoration: const BoxDecoration(
                gradient: LinearGradient(
              begin: Alignment.topRight,
              end: Alignment.bottomLeft,
              colors: [MyColor.biruLight, MyColor.graySubtitle],
            )),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                TextButton(
                  onPressed: () {
                    html.window.open('https://github.com/Karula-k', "_blank");
                  },
                  child: Image.asset(
                    'assets/img/github.png',
                    height: 40,
                    width: 40,
                  ),
                ),
                TextButton(
                  onPressed: () {
                    html.window.open(
                        'https://www.linkedin.com/in/dzul-fikri-irsyad-28b2911b2/',
                        "_blank");
                  },
                  child: Image.asset(
                    'assets/img/linkedin.png',
                    height: 40,
                    width: 40,
                  ),
                ),
              ],
            ),
          ),
        ));
  }
}

class PortofolioSection extends StatelessWidget {
  const PortofolioSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: MyColor.whiteBG,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              'My project',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 20,
              ),
            ),
          ),
          SizedBox(
            height: 200,
            child: ScrollConfiguration(
              behavior: ScrollConfiguration.of(context).copyWith(
                dragDevices: {
                  PointerDeviceKind.touch,
                  PointerDeviceKind.mouse,
                  PointerDeviceKind.trackpad,
                  PointerDeviceKind.stylus,
                  PointerDeviceKind.unknown
                },
              ),
              child: ListView(
                scrollDirection: Axis.horizontal,
                children: const [
                  CardScroll(
                    title: 'ChickenSense',
                    subtitle: 'apps with flutter',
                    content:
                        'this apps organilly from capstone team but ported to Flutter',
                    link: 'https://github.com/Karula-k/chickenSense',
                    img: Logo.flutter,
                  ),
                  CardScroll(
                    title: 'ChickenSense backend',
                    subtitle: 'app using FastAPI',
                    content:
                        'Using template from @github.com/kaenova in github to make the backend',
                    link: 'https://github.com/Karula-k/backEndFastAPi',
                    img: Logo.backEnd,
                  ),
                  CardScroll(
                    title: 'ChickenSense',
                    subtitle: 'Tensorflow with python',
                    content:
                        'Machine learning using tensorflow with CNN to identify ill from the chicken',
                    link:
                        'https://github.com/Chicken-Sense/Chicken-Sense/tree/ml-branch',
                    img: Logo.machineLearning,
                  )
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}

class IntroductionSections extends StatelessWidget {
  const IntroductionSections({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: MyColor.biruLight,
      child: Column(
        children: [
          Wrap(
            direction: Axis.horizontal,
            crossAxisAlignment: WrapCrossAlignment.center,
            alignment: WrapAlignment.spaceEvenly,
            children: [
              Column(
                children: [
                  Card(
                    elevation: 2,
                    child: Card(
                      color: const Color.fromARGB(255, 5, 44, 56),
                      child: SizedBox(
                        height: 200,
                        width: 350,
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                              children: [
                                Column(
                                  children: [
                                    const Padding(
                                      padding: EdgeInsets.fromLTRB(8, 8, 8, 0),
                                      child: Text(
                                        'Dzul Fikri Irsyad',
                                        style: TextStyle(
                                          color: Colors.white,
                                          fontSize: 24,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      margin: const EdgeInsets.only(top: 4),
                                      width: 180,
                                      color: Colors.white,
                                      height: 1,
                                    ),
                                    const Padding(
                                      padding: EdgeInsets.fromLTRB(8, 0, 8, 0),
                                      child: Text(
                                        'Junior developer',
                                        style: TextStyle(
                                          color: Colors.white,
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                SizedBox(
                                    height: 100,
                                    width: 100,
                                    child:
                                        Image.asset('assets/img/qr-code.png'))
                              ],
                            ),
                            Container(
                              height: 30,
                              decoration: const BoxDecoration(
                                  gradient: LinearGradient(
                                begin: Alignment.topRight,
                                end: Alignment.bottomLeft,
                                colors: [
                                  MyColor.biruLight,
                                  MyColor.biruDark,
                                ],
                              )),
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                              children: [
                                OutlinedButton.icon(
                                    onPressed: () {},
                                    icon: const Icon(Icons.pin_drop),
                                    label: const Text('Indonesia')),
                                OutlinedButton.icon(
                                    onPressed: () {
                                      html.window.open(
                                          "mailto:d.fikriirsyad@gmail.com",
                                          "_blank");
                                    },
                                    icon: const Icon(Icons.email),
                                    label: const Text(
                                      'd.fikriirsyad',
                                      overflow: TextOverflow.clip,
                                    )),
                              ],
                            )
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              Lottie.asset(
                'assets/animation/man_code_animation.json',
                frameRate: FrameRate.max,
              ),
            ],
          ),
        ],
      ),
    );
  }
}
