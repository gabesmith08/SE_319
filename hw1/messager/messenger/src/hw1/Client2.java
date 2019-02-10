package hw1;

/**
 * 
 * @author Richard Smith
 *
 */

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.InetAddress;
import java.net.Socket;
import java.util.Scanner;

public class Client2 {

	 private static Socket socket;
	 
    public static void main(String args[])
    {
        try
        {
        	//Ask for name
        	Scanner sc = new Scanner(System.in);
        	System.out.print("Enter your name: ");
        	String name = sc.nextLine();
        	name = name + ": ";
        	
        	//connect to server
            String host = "localhost";
            int port = 4444;
            InetAddress address = InetAddress.getByName(host);
            socket = new Socket(address, port);
            //Get ready to send message to server
            OutputStream os = socket.getOutputStream();
            OutputStreamWriter osw = new OutputStreamWriter(os);
            BufferedWriter bw = new BufferedWriter(osw);
        	

            while(true)
            {
		            //read message from keyboard input
		        	System.out.println("type your message: ");
		        	String message = sc.nextLine();
		        	
		        	//append name to message
		        	String sendMessage = name + message;
		        	
		        	//send the message
		            bw.write(sendMessage);
		            bw.close();
		            System.out.println("  *Message sent*\n");
		            socket = new Socket(address, port);
		            os = socket.getOutputStream();
		            osw = new OutputStreamWriter(os);
		            bw = new BufferedWriter(osw);
		           
		            //Get message from the server
		           /* InputStream is = socket.getInputStream();
		            InputStreamReader isr = new InputStreamReader(is);
		            BufferedReader br = new BufferedReader(isr);
		            String receiveMessage = br.readLine();*/
			        
		            //Don't display if you're the one who sent it
		           /* Scanner sc1 = new Scanner(receiveMessage);
		            String recipientCheck = sc1.next();
		            if(!recipientCheck.equals(name + " "))
			        {
			            System.out.println("Message received: " +receiveMessage);
		            }*/
            }
        }
        catch (Exception exception)
        {
            exception.printStackTrace();
        }
        finally
        {
            //Closing the socket
            try
            {
                socket.close();
            }
            catch(Exception e)
            {
                e.printStackTrace();
            }
        }
    }	
}
