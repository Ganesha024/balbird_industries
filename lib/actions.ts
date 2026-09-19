"use server";

import { supabase } from "./supabase";
import { createClient } from "./supabase-server";

export async function submitJoinNetwork(formData: FormData) {
  const organization_name = formData.get("organization_name") as string;
  const sector = formData.get("sector") as string;
  const country = formData.get("country") as string;
  const pincode = formData.get("pincode") as string;
  const contact_person = formData.get("contact_person") as string;
  const contact_email = formData.get("contact_email") as string;
  const whatsapp_number = formData.get("whatsapp_number") as string;
  const role_description = formData.get("role_description") as string;
  const selected_role = formData.get("selected_role") as string;

  // Extract all remaining keys as role_specific_data
  const role_specific_data: Record<string, string> = {};
  
  const knownKeys = [
    "organization_name", "sector", "country", "pincode", "contact_person", 
    "contact_email", "whatsapp_number", "role_description", 
    "selected_role", "company_profile"
  ];

  for (const [key, value] of formData.entries()) {
    if (!knownKeys.includes(key)) {
      if (typeof value === "string" && !key.startsWith("$ACTION")) {
        role_specific_data[key] = value;
      }
    }
  }

  // Handle file upload
  const company_profile = formData.get("company_profile") as File | null;
  if (company_profile && company_profile.size > 0) {
    const fileExt = company_profile.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    const { error: uploadError } = await supabase.storage
      .from('company_profiles')
      .upload(fileName, company_profile);
      
    if (!uploadError) {
      const { data: publicUrlData } = supabase.storage
        .from('company_profiles')
        .getPublicUrl(fileName);
      role_specific_data['company_profile_url'] = publicUrlData.publicUrl;
    } else {
      console.error("Storage upload error:", uploadError);
    }
  }

  const { error } = await supabase
    .from('join_network_requests')
    .insert([
      {
        organization_name,
        sector,
        country,
        pincode,
        contact_person,
        contact_email,
        whatsapp_number,
        role_description,
        selected_role,
        role_specific_data
      }
    ]);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function submitStrategicDiscussion(formData: FormData) {
  const organization_name = formData.get("organization_name") as string;
  const network_type = formData.get("Network_type") as string;
  const sector = formData.get("sector") as string;
  const country_region = formData.get("country_region") as string;
  const pincode = formData.get("pincode") as string;
  const contact_person = formData.get("contact_person") as string;
  const contact_email = formData.get("contact_email") as string;
  const whatsapp_number = formData.get("whatsapp_number") as string;
  const discussion_topics = formData.get("discussion_topics") as string;

  let document_url = null;

  // Handle file upload
  const rfq_document = formData.get("rfq_document") as File | null;
  if (rfq_document && rfq_document.size > 0) {
    const fileExt = rfq_document.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    const { error: uploadError } = await supabase.storage
      .from('company_profiles')
      .upload(fileName, rfq_document);
      
    if (!uploadError) {
      const { data: publicUrlData } = supabase.storage
        .from('company_profiles')
        .getPublicUrl(fileName);
      document_url = publicUrlData.publicUrl;
    } else {
      console.error("Storage upload error:", uploadError);
    }
  }

  const { error } = await supabase
    .from('strategic_discussion_requests')
    .insert([
      {
        organization_name,
        network_type,
        sector,
        country_region,
        pincode,
        contact_person,
        contact_email,
        whatsapp_number,
        discussion_topics,
        document_url
      }
    ]);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function submitTraceabilityEntry(formData: FormData) {
  const batch_number = formData.get("batch_number") as string;
  const product_name = formData.get("product_name") as string;
  const client_name = formData.get("client_name") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as string || "pending";
  const progress = parseInt(formData.get("progress") as string) || 0;
  const user_id = formData.get("user_id") as string;

  let image_url = null;

  if (!user_id) {
    console.error("No user_id provided in form data");
    return { success: false, error: "User not authenticated - no user_id provided" };
  }

  console.log("User ID from form:", user_id);

  // Use client-side supabase for this action
  // Handle image upload
  const traceability_image = formData.get("traceability_image") as File | null;
  if (traceability_image && traceability_image.size > 0) {
    console.log("Image file received:", traceability_image.name, traceability_image.size, traceability_image.type);
    
    try {
      const fileExt = traceability_image.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      
      console.log("Attempting to upload to bucket: traceability_images, file:", fileName);
      
      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('traceability_images')
        .upload(fileName, traceability_image);
        
      if (uploadError) {
        console.error("Storage upload error:", uploadError);
        // Continue without image upload for now
        console.log("Continuing without image upload due to error");
      } else {
        console.log("Upload successful:", uploadData);
        
        const { data: publicUrlData } = supabase.storage
          .from('traceability_images')
          .getPublicUrl(fileName);
        image_url = publicUrlData.publicUrl;
        console.log("Public URL generated:", image_url);
      }
    } catch (error) {
      console.error("Exception during image upload:", error);
      // Continue without image upload
      console.log("Continuing without image upload due to exception");
    }
  }

  const { error } = await supabase
    .from('traceability_entries')
    .insert([
      {
        user_id: user_id,
        batch_number,
        product_name,
        client_name,
        description,
        image_url,
        status,
        progress
      }
    ]);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function getTraceabilityEntries(userId: string) {
  const { data, error } = await supabase
    .from('traceability_entries')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false, error: error.message, data: null };
  }

  return { success: true, data };
}
