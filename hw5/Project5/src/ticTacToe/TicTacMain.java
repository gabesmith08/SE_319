package ticTacToe;

import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class TicTacMain extends JPanel
{
	JButton buttons[] = new JButton[9]; 
	// player 1 is X, player 2 is O
	private ImageIcon imageX = new ImageIcon("x.jpg");
	private ImageIcon imageO = new ImageIcon("o.jpg");
	// if this number is a even, then put a X. If it's odd, then put an O
    int alternate = 0;
    
    public TicTacMain()
    {
	      setLayout(new GridLayout(3,3));
	      initializeButtons();
    }
    
    public void initializeButtons()
    {
    	for(int i = 0; i <= 8; i++)
        {
    		buttons[i] = new JButton();
            buttons[i].addActionListener(new buttonListener());
            buttons[i].setIcon(null);
            
            add(buttons[i]); //adds this button to JPanel        
        }
    }
    
    public void resetButtons()
    {
        for(int i = 0; i <= 8; i++)
        {
            buttons[i].setIcon(null);
        }
    }
    
// when a button is clicked, it generates an ActionEvent. Thus, each button needs an ActionListener. When it is clicked, it goes to this listener class that I have created and goes to the actionPerformed method. There (and in this class), we decide what we want to do.
    private class buttonListener implements ActionListener
    {
       
        public void actionPerformed(ActionEvent click) 
        {
            
            JButton button = (JButton)click.getSource(); //get the particular button that was clicked
            

            // if turn is even and tile hasn't been clicked, mark an X
            if((alternate % 2 == 0) && (button.getIcon() == null)) {
    			button.setIcon(imageX);
                // switches player for next round
                alternate++;
            }
            // if turn is odd and tile hasn't been clicked, mark an O
            if((alternate % 2 == 1) && (button.getIcon() == null)) {
                button.setIcon(imageO);
                // switches player for next round
                alternate++;
            }

            // counts amount of filled tiles to check for draw
            int count = 0;
            for(int i = 0; i <= 8; i++) {
            	if(buttons[i].getIcon() != null)
            		count++;
            }
            if(checkForWin() == false && count == 9) {
            	JOptionPane.showMessageDialog(null, "Draw! Play again?", "DRAW", JOptionPane.INFORMATION_MESSAGE);
            	resetButtons();
        	}
            	
            // check if there's a win
            if(checkForWin() == true)
            {
            	if(alternate % 2 == 1) {
            		JOptionPane.showMessageDialog(null, "Congratulations, X won the game! Play again?", "WINNER", JOptionPane.INFORMATION_MESSAGE);
            	}
            	else {
            		JOptionPane.showMessageDialog(null, "Congratulations, O won the game! Play again?", "WINNER", JOptionPane.INFORMATION_MESSAGE);
            	}
                resetButtons();
            }
            
            // show which players turn it is
            if (alternate % 2 == 0)
            	JOptionPane.showMessageDialog(null, "Player 1's turn", "Player 1", JOptionPane.INFORMATION_MESSAGE);
            else
            	JOptionPane.showMessageDialog(null, "Player 2's turn", "Player 2", JOptionPane.INFORMATION_MESSAGE);
        }
        
        public boolean checkForWin()
        {
            /**   button array looks like this on the board
             *      0 | 1 | 2
             *      3 | 4 | 5
             *      6 | 7 | 8
             */
            // checks for horizontal win
            if( checkAdjacent(0,1) && checkAdjacent(1,2) ) //no need to put " == true" because the default check is for true
                return true;
            else if( checkAdjacent(3,4) && checkAdjacent(4,5) )
                return true;
            else if ( checkAdjacent(6,7) && checkAdjacent(7,8))
                return true;
            
            // checks for vertical win
            else if ( checkAdjacent(0,3) && checkAdjacent(3,6))
                return true;  
            else if ( checkAdjacent(1,4) && checkAdjacent(4,7))
                return true;
            else if ( checkAdjacent(2,5) && checkAdjacent(5,8))
                return true;
            
            // checks for diagonal win
            else if ( checkAdjacent(0,4) && checkAdjacent(4,8))
                return true;  
            else if ( checkAdjacent(2,4) && checkAdjacent(4,6))
                return true;
            else 
                return false;
            
            
        }
        
        public boolean checkAdjacent(int a, int b)
        {
            if ((buttons[a].getIcon() == imageO && buttons[b].getIcon() == imageO) ||
            	(buttons[a].getIcon() == imageX && buttons[b].getIcon() == imageX))
                return true;
            else
                return false;
        }
        
    }
    
    public static void main(String[] args) 
    {
        JFrame window = new JFrame("Tic-Tac-Toe");
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.getContentPane().add(new TicTacMain());
        window.setSize(700,700);
        window.setVisible(true);
        // Initially lets player 1 go first then after a win or draw it alternates what player goes first
    	JOptionPane.showMessageDialog(null, "Player 1, go first", "Player 1", JOptionPane.INFORMATION_MESSAGE);
    }
}
