/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pkgfinal;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.BorderFactory;
import javax.swing.BoxLayout;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author alumne-DAM
 */
public class VerVenta {
     /**
     * Muestra la pantalla principal de gestión de ventas.
     * 
     * @param args Los argumentos de la línea de comandos.
     */

    public static void showVentaScreen(String[] args) {
        /**
         * @param id_cliente El id del cliente asignado a la venta
         * @param id_moto El id de la moto asignada a la venta
         * @param fecha La fecha de la venta
         */
        String url = "jdbc:mysql://localhost:3306/final";

        JFrame frame = new JFrame();
        frame.setTitle("Tabla");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        frame.setSize(800, 800);

       

        
        DefaultTableModel dataModel = new DefaultTableModel();
        JTable table = new JTable(dataModel);
        JScrollPane scrollpane = new JScrollPane(table);
       
        dataModel.setColumnIdentifiers(new String[] {"id", "id_cliente", "id_moto", "fecha"});
      
        try (Connection conexion = DriverManager.getConnection(url, "root", "");
             PreparedStatement ps = conexion.prepareStatement("SELECT * FROM venta");
             ResultSet rs = ps.executeQuery()) {
       
        while (rs.next()) {
                int id = rs.getInt("id");
                int id_cliente = rs.getInt("id_cliente");
                int id_moto = rs.getInt("id_moto");
                String fecha = rs.getString("fecha");
                dataModel.addRow(new Object[]{id, id_cliente, id_moto, fecha});
            }
        
        } catch (java.sql.SQLException ex) {
            Logger.getLogger(VerCliente.class.getName()).log(Level.SEVERE, null, ex);
        }
        panel.add(scrollpane);
        frame.add(panel);
         frame.setVisible(true);

    }
}  