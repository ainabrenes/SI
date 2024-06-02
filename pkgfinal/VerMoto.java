/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pkgfinal;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.BorderFactory;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author alumne-DAM
 */
public class VerMoto {

    /**
     * Muestra la pantalla principal de gestión de motos.
     * 
     * @param args Los argumentos de la línea de comandos.
     */

    public static void showMotoScreen(String[] args) {
        /**
         * @param marca La marca de la nueva moto
         * @param nombre El nombre de la nueva moto
         * @param cilindrada La cilindrada de la nueva moto
         * @param matricula La matricula de la nueva moto
         */
        String url = "jdbc:mysql://localhost:3306/final";

        JFrame frame = new JFrame();
        frame.setTitle("Tabla");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        frame.setSize(800, 800);

        JButton AgregarMoto = new JButton("Agregar Moto");
        AgregarMoto.addActionListener(new ActionListener() {
            //private Connection conexion;
            @Override
            public void actionPerformed(ActionEvent e) {
                agrearMoto();
            }
        });

        panel.add(AgregarMoto);

        DefaultTableModel dataModel = new DefaultTableModel();
        JTable table = new JTable(dataModel);
        JScrollPane scrollpane = new JScrollPane(table);
       
        dataModel.setColumnIdentifiers(new String[]{"id", "marca", "nombre", "cilindrada", "matricula"});
        
        try (Connection conexion = DriverManager.getConnection(url, "root", ""); PreparedStatement ps = conexion.prepareStatement("SELECT * FROM moto"); ResultSet rs = ps.executeQuery()) {
          
            while (rs.next()) {
                int id = rs.getInt("id");
                String marca = rs.getString("marca");
                String nombre = rs.getString("nombre");
                String cilindrada = rs.getString("cilindrada");
                String matricula = rs.getString("matricula");
                dataModel.addRow(new Object[]{id, marca, nombre, cilindrada, matricula});
            }

        } catch (java.sql.SQLException ex) {
            Logger.getLogger(VerCliente.class.getName()).log(Level.SEVERE, null, ex);
        }
        panel.add(scrollpane);
        frame.add(panel);
        frame.setVisible(true);

    }

    /**
     * Enseña una ventana nueva para agregar una moto a la base de datos.
     */
    private static void agrearMoto() {
        JFrame frame = new JFrame("Agregar Moto");
        frame.setSize(400, 300);
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        JLabel marcaLabel = new JLabel("Marca:");
        JTextField marcaField = new JTextField();
        JLabel nombreLabel = new JLabel("Nombre:");
        JTextField nombreField = new JTextField();
        JLabel ccLabel = new JLabel("cilindrada:");
        JTextField ccField = new JTextField();
        JLabel matriculaLabel = new JLabel("matricula:");
        JTextField matriculaField = new JTextField();
        JButton agregarButton = new JButton("Agregar");
        agregarButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String marca = marcaField.getText();
                String nombre = nombreField.getText();
                String cilindrada = ccField.getText();
                String matricula = matriculaLabel.getText();

             
                try {
                    Connection conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/final", "root", "");
                    String moto = "INSERT INTO moto VALUES (?, ?, ?, ?, ?)";
                    PreparedStatement myst = conexion.prepareStatement(moto);

                    myst.setString(1, null);
                    myst.setString(2, marca);
                    myst.setString(3, nombre);
                    myst.setString(4, cilindrada);
                    myst.setString(5, matricula);
                    myst.executeUpdate();

                    conexion.close();
                } catch (java.sql.SQLException ex) {
                    ex.printStackTrace();
                }

            }
        });

       
        panel.add(marcaLabel);
        panel.add(marcaField);
         panel.add(nombreLabel);
        panel.add(nombreField);
        panel.add(ccLabel);
        panel.add(ccField);
         panel.add(matriculaLabel);
        panel.add(matriculaField);
        panel.add(agregarButton);

        frame.add(panel);
        frame.setVisible(true);
    }
}