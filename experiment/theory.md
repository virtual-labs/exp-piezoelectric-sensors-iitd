### Theory
	
The experimental setup is as shown in Fig. 1. It consists of a cantilevered aluminium beam of dimensions 300 × 18.2 × 2.15 mm with a Piezoelectric PZT patch sensor bonded on the surface near the point of fixity. The wires from the patch are connected to Agilent 34411A Digital Multi Meter (DMM) <!--which is in turn connected to the LAN port and thus accessible to the user through the internet/intranet. -->

The cantilever beam is excited into free-damped vibrations through an automatic mechanical exciter at regular intervals. As the beam vibrates, the surface strain fluctuates between compression and tension, thereby developing sinusoidally varying charge (and hence voltage) across the electrodes of the PZT patch sensor through the direct piezoelectric effect (for more details <a href="http://ssdl.iitd.ac.in/vssdl/piezo.pdf">click here</a>) to learn more about piezoelectricity. The instantaneous voltage developed across the piezoelectric sensor is measured at the user specified time interval using the DMM. A sampling rate of 1 millisecond and a total sampling time of 5s is recommended for best results. The dialogue box stores the time and the frequency domain data in the computer of the user.
<center>
	
<img src="images/theory1.png"/>

	
**Fig. 1** Experimental set up
	
</center>

The user may plot the time domain data in excel to visualize the free damped oscillations more minutely. At the same time, through fast Fourier transform, the user can convert the time domain data (as an array of voltage output, <i>V_time</i>) in the frequency domain. If using MATLAB, following commands can be used:

<img src="images/th2.png" height="50px" />

This command will produce an array of voltage values in the frequency domain. The corresponding array of frequencies can be obtained by using following command

<img src="images/th3.png" style="height:50px; padding-left: 30px;"/>

where <i>N</i> is the total number of samples in the time domain and <i>T</i> the sampling interval (here
0.001 second). It may be noted that the VEE PRO dialogue box also provides the array <i>V_fft</i>. The user may use it directly if MATLAB is not available. Fig. 2 shows typical time and frequency domain responses expected if the experiment is correctly performed.

<img src="images/th4.png"/>

From the frequency plot, the user can identify the natural frequency of the beam as the frequency corresponding to which peak voltage response is observed. The damping ratio can be calculated using the half power band method (Paz, 2004) as

<img src="images/th5.png" height="70px"/>

where f<sub>n</sub> is the frequency corresponding to peak response and f<sub>1</sub> and f<sub>2</sub> represent the frequencies corresponding to 0.707 of the peak response <i>(f2 > fn > f1)</i>.<br>
The user may compare the values obtained through this experiment with damping ratio available from the literature and the theoretical frequency given below (Paz, 2004).

<img src="images/th6.png" style="padding-left: 18px; height: 70px"/>

where <i>E</i> denotes the Young’s modulus of elasticity of the beam, <i>I</i> the moment of inertia, <i>ρ</i> the material density and <i>L</i> the length of the beam.
