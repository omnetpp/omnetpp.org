---
layout: post
title: 'INET-HNRL: Optical, Wireless and Hybrid Networking Extensions for INET'
joomla_id: 3683
joomla_url: inet-hnrl-optical-wireless-and-hybrid-networking-extensions-for-inet
date: 2010-12-17 15:24:19.000000000 +01:00
author: Andras
excerpt: "<p><i>From Kyeong Soo Kim:</i> This is to announce the INET-HNRL, a new
  fork of \r\nINET Framework developed for hybrid networking research. INET-HNRL \r\nprovides
  new models in both the optical and the wireless networking areas \r\nand their hybrid.
  Currently, the following models and research frameworks have been implemented:</p>\r\n<ul>\r\n<li>Models
  for the hybrid TDM/WDM-PON under the SUCCESS-HPON architecture;</li>\r\n<li>Comparative
  analysis framework based on the equivalent circuit rate (ECR) for the study of next-generation
  optical access (NGOA) architectures;</li>\r\n<li>Wi-Fi localization (currently integrating
  them into INET, which were formerly implemented based on INETMANET)</li>\r\n</ul>\r\n\r\n<p>The
  project homepage is at <a target=\"_blank\" href=\"http://kyeongsoo.github.com/inet-hnrl/\"
  mce_href=\"http://kyeongsoo.github.com/inet-hnrl/\">http://kyeongsoo.github.com/inet-hnrl</a>,
  where you can find a brief overview of each model/framework together with all the
  relevant publications. The github project URL is <a target=\"blank\" href=\"https://github.com/kyeongsoo/inet-hnrl\"
  mce_href=\"https://github.com/kyeongsoo/inet-hnrl\">https://github.com/kyeongsoo/inet-hnrl</a>.\r\n\r\n</p>"
category: Software
---
<p><i>From Kyeong Soo Kim:</i> This is to announce the INET-HNRL, a new fork of
INET Framework developed for hybrid networking research. INET-HNRL
provides new models in both the optical and the wireless networking areas
and their hybrid. Currently, the following models and research frameworks have been implemented:</p>
<ul>
<li>Models for the hybrid TDM/WDM-PON under the SUCCESS-HPON architecture;</li>
<li>Comparative analysis framework based on the equivalent circuit rate (ECR) for the study of next-generation optical access (NGOA) architectures;</li>
<li>Wi-Fi localization (currently integrating them into INET, which were formerly implemented based on INETMANET)</li>
</ul>

<p>The project homepage is at <a target="_blank" href="http://kyeongsoo.github.com/inet-hnrl/" mce_href="http://kyeongsoo.github.com/inet-hnrl/">http://kyeongsoo.github.com/inet-hnrl</a>, where you can find a brief overview of each model/framework together with all the relevant publications. The github project URL is <a target="blank" href="https://github.com/kyeongsoo/inet-hnrl" mce_href="https://github.com/kyeongsoo/inet-hnrl">https://github.com/kyeongsoo/inet-hnrl</a>.

</p>


<p>The details of each models are also provided in NED documents (for this, you need to generate NED
documents in the OMNeT++ IDE).</p>

<p>Of the linked publications, the most relevant one for this project is the following one:</p>
<ul>
<li>Kyeong Soo Kim, <i>"Integration of OMNeT++ hybrid TDM/WDM-PON models into INET Framework,"</i> submitted to OMNeT++ Workshop 2011, Nov. 25, 2010. (<a href="http://iat-hnrl.swan.ac.uk/%7Ekks/publications/hybrid_pon_omnetpp2011.pdf" mce_href="http://iat-hnrl.swan.ac.uk/~kks/publications/hybrid_pon_omnetpp2011.pdf">pdf</a>)</li>
</ul>

<p>As mentioned in the above paper, you can find that the INET-HNRL
provides simulation models not only for new networking protocols but
also new application-level traffic sources and sinks (including new
streaming video traffic generation based on real trace files).</p>

<p>As for the actual use of the simulation models and frameworks, please
check the two example directories (i.e., "ecr" and "ecr2") under
"examples/ngoa". Not only usual "ini" and "ned" files, you can also
find script files for post-processing (mostly based on R, some on
Python/SciPy, Perl, &amp; Bash).</p>

<p>Now that I just finished teaching for this term, I will work on the
home page to update it and add more information soon. Also, I'm
currently looking into the merge of <a target="_blank" mce_href="http://www.omnetpp.org/models/catalog/doc_details/2211-ethernet-passive-optical-network-epon" href="http://www.omnetpp.org/models/catalog/doc_details/2211-ethernet-passive-optical-network-epon">Andreas Bodozoglou's EPON model</a>
to provide integrated PON models to the OMNeT++ community as we
briefly discussed before.</p>

<p>Final remark: It would be greatly appreciated if you could cite the
relevant papers linked in the project home page if you use the models
and framework in the INET-HNRL.</p>

<p>Kyeong Soo (Joseph) Kim, Ph.D.<br />
Senior Lecturer in Networking<br />
Room 112, Digital Technium<br />
Multidisciplinary Nanotechnology Centre, College of Engineering<br />
Swansea University, Singleton Park, Swansea SA2 8PP, Wales UK<br />
TEL: +44 (0)1792 602024<br />
EMAIL: k.s.kim_at_swansea.ac.uk<br />
HOME: http://iat-hnrl.swan.ac.uk/ (group)<br />
http://iat-hnrl.swan.ac.uk/~kks/ (personal)<br />
</p>
