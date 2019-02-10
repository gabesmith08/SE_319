package hw1;

/**
 * 
 * @author Richard Smith
 *
 */

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.Flushable;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class Server {

	 private static Socket socket;
	 private static ServerSocket serverSocket;
	 
	    public static void main(String[] args)
	    {
	        try
	        {
	        	
	        	//Start Server
	            int port = 4444;
	            serverSocket = new ServerSocket(port);
	            System.out.println("Waiting for Client to connect...\n");
	            socket = serverSocket.accept();
	            System.out.println("Client connected! \n");
                InputStream is = socket.getInputStream();
                InputStreamReader isr;
                BufferedReader br; 
	            //While loop to make sure the server is always running
	            while(true)
	            {
	                //Read message from client
	            	
	              
	                isr = new InputStreamReader(is);
	                br = new BufferedReader(isr);
	                String clientMessage = br.readLine();
	                System.out.println("Message received from " + clientMessage);
	                socket = serverSocket.accept();
	                
	                is = socket.getInputStream();
	 
	                //variable for returning message
	                //String returnMessage;
	 
	                //Sending the response back to the client.
	               /* OutputStream os = socket.getOutputStream();
	                OutputStreamWriter osw = new OutputStreamWriter(os);
	                BufferedWriter bw = new BufferedWriter(osw);
	                bw.write(message);
	                System.out.println("Message sent to the client is "+message);
	                bw.flush();*/
	            }
	        }
	        catch (Exception e)
	        {
	            e.printStackTrace();
	        }
	        finally
	        {
	            try
	            {
	                socket.close();
	            }
	            catch(Exception e){}
	        }
	    }
	
}
